import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import SaveIcon from '@mui/icons-material/Save';
import { IconButton } from '@mui/material';
import { Point2D } from '@tuxmart/ui';
import {
  BCFViewpointsPlugin,
  Entity,
  FastNavPlugin,
  GLTFLoaderPlugin,
  Viewer,
  XKTLoaderPlugin,
  TreeViewPlugin,
} from '@tuxmart/xeokit-sdk';
import { Camera } from '@tuxmart/xeokit-sdk/viewer/scene/camera/Camera';
import { forEach, noop, values } from 'lodash';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { IFC_DEFAULTS } from './config';
import { drawAABB, get2dFrom3d, getAABBCenter } from './utils';

interface Model {
  id: string;
  src: string;
  metaModelSrc?: string;
  edges?: boolean;
  performance?: boolean;
}

interface NavCubeSettingsItem {
  canvasId: string;
  canvasWidth?: number;
  canvasHeight?: number;
}

interface Point3D {
  x: number;
  y: number;
  z: number;
}

export interface BCFViewpointsJSON {
  perspective_camera?: {
    camera_view_point?: Point3D;
    camera_direction?: Point3D;
    camera_up_vector?: Point3D;
    field_of_view?: number;
    [key: string]: unknown;
  };
  lines?: unknown[];
  clipping_planes?: {
    location?: Point3D;
    direction?: Point3D;
    [key: string]: unknown;
  }[];
  bitmaps?: unknown[];
  snapshot?: {
    snapshot_type?: string;
    snapshot_data?: string;
    [key: string]: unknown;
  };
  components?: {
    visibility?: {
      default_visibility?: boolean;
      exceptions: {
        ifc_guid?: string;
        originating_system?: string;
        authoring_tool_id?: string;
        [key: string]: unknown;
      }[];
      view_setup_hints?: {
        spaces_visible?: boolean;
        space_boundaries_visible?: boolean;
        openings_visible?: boolean;
        [key: string]: unknown;
      };
      [key: string]: unknown;
    };
    selection?: {
      ifc_guid?: string;
      [key: string]: unknown;
    }[];
    [key: string]: unknown;
  };
}

export interface ViewerProps {
  canvasID: string;
  width: number;
  height: number;
  camera?: Camera;
  models: Model[];
  bcfViewpoint?: BCFViewpointsJSON;
  eventToPickOn?: string;
  navCubeSettings?: NavCubeSettingsItem;
  components?: any[];
  plugins?: any[];
  isDev?: boolean;
  overlay?: JSX.Element;
  debug?: boolean;
  onUpdateXY?: (id: string, pt: Point2D) => void;
  onSelectEntity?: (id: string, source: Point2D, destination: Point2D) => void;
  onUnselectEntity?: (id: string) => void;
}

interface ModelEntity extends Entity {
  on: (event: string, callback: (...args: unknown[]) => void) => void;
}

export const makeViewer = (
  LoaderPlugin: typeof GLTFLoaderPlugin | typeof XKTLoaderPlugin,
): FC<ViewerProps> => {
  const ModelViewer: FC<ViewerProps> = ({
    canvasID,
    width,
    height,
    models,
    bcfViewpoint,
    eventToPickOn = 'mouseclicked',
    navCubeSettings,
    plugins,
    components,
    isDev = false,
    debug = false,
    onUpdateXY = noop,
    onSelectEntity = noop,
    onUnselectEntity,
  }) => {
    const [isDevPanelVisible, setIsDevPanelVisible] = useState(false);
    const lineCanvas = useRef<HTMLCanvasElement>(null);
    const bimCanvas = useRef<HTMLCanvasElement>(null);
    const viewer = useRef<Viewer>();
    const modelLoader = useRef<InstanceType<typeof LoaderPlugin>>();
    const bcfViewpointsPlugin = useRef<BCFViewpointsPlugin>();

    useEffect(() => {
      return () => {
        if (viewer.current) {
          viewer.current.destroy();
        }
      };
    }, []);

    const setUpViewer = useCallback(() => {
      viewer.current = new Viewer({
        canvasId: canvasID,
        saoEnabled: true,
      });
      viewer.current.scene.pointsMaterial.roundPoints = false;
    }, [canvasID]);

    const initializeModelLoader = useCallback(() => {
      modelLoader.current = new LoaderPlugin(viewer.current, {
        objectDefaults: IFC_DEFAULTS,
        maxGeometryBatchSize: 50000000,
      });
    }, []);

    const setCamera = useCallback(() => {
      const cam = viewer.current?.camera as Camera;
      if (cam) {
        cam.on('matrix', (e: number[]) => {
          const bimCtx = lineCanvas.current?.getContext('2d');
          values(viewer.current?.scene.highlightedObjects).forEach((ett: Entity) => {
            const center = getAABBCenter(ett.aabb);
            if (bimCtx) {
              if (debug) drawAABB(bimCtx, [...e], [...ett.aabb]);
            }
            const [x, y] = get2dFrom3d(width, height, [...e], center);
            // TODO: Batch this update
            onUpdateXY(ett.id, { x, y });
          });
        });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debug, height, width]);

    const setBCFViewpoints = useCallback(() => {
      bcfViewpointsPlugin.current?.setViewpoint(bcfViewpoint);
    }, [bcfViewpoint]);

    const loadModels = useCallback(async () => {
      const entities = models.map((model) => {
        const m = modelLoader.current?.load({
          ...model,
          edges: true,
          performance: false,
          excludeUnclassifiedObjects: true,
        }) as ModelEntity;

        return m;
      });
      await Promise.all(
        entities.map((model) => new Promise((resolve) => model.on('loaded', resolve))),
      );
    }, [models]);

    const loadPlugins = useCallback(() => {
      forEach(plugins, (plugin) => {
        const [, ...restArgs] = plugin.args || [];
        new plugin.plugin(viewer.current, ...restArgs);
      });

      forEach(components, (component) => {
        const [, ...restArgs] = component.args || [];
        new component.component(viewer.current?.scene, ...restArgs);
      });

      new FastNavPlugin(viewer.current, {});
      new BCFViewpointsPlugin(viewer.current, {});
      isDev &&
        new TreeViewPlugin(viewer.current, {
          containerElement: document.getElementById('treeViewContainer'),
        });
    }, [components, isDev, plugins]);

    const getAABBCenter2DPosition = useCallback(
      (center: number[]) => {
        return get2dFrom3d(
          width,
          height,
          [...(viewer.current?.camera as Camera).viewMatrix],
          center,
        );
      },
      [height, width],
    );

    const pickEntity = useCallback(() => {
      const scene = viewer.current?.scene;
      scene?.input.on(eventToPickOn, (coords: [number, number]) => {
        const hit = scene.pick({
          canvasPos: coords,
        });

        if (hit) {
          const ett = hit.entity as Entity;
          if (!ett.highlighted) {
            ett.highlighted = true;
            const aabb = ett.aabb;
            const center = getAABBCenter(aabb);
            const [x, y] = getAABBCenter2DPosition(center);

            const num = viewer.current?.scene.highlightedObjectIds.length ?? 0;
            onSelectEntity(ett.id, { x: 100 + num * 20, y: 100 + num * 20 }, { x, y });
          } else {
            onUnselectEntity?.(`${ett.id}`);
            ett.highlighted = false;
          }
        }
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debug, eventToPickOn, height, width]);

    useEffect(() => {
      (async () => {
        setUpViewer();
        initializeModelLoader();
        loadPlugins();
        loadModels();
        setCamera();
        if (bcfViewpoint) setBCFViewpoints();
        pickEntity();
      })();
    }, [
      bcfViewpoint,
      initializeModelLoader,
      loadModels,
      loadPlugins,
      pickEntity,
      setBCFViewpoints,
      setCamera,
      setUpViewer,
    ]);

    const toggleDevPanel = useCallback(() => {
      setIsDevPanelVisible((prev) => !prev);
    }, []);

    const downloadBCF = useCallback(() => {
      const viewpoint = bcfViewpointsPlugin.current?.getViewpoint({
        // Options
        spacesVisible: true, // Don't force IfcSpace types visible in viewpoint (default)
        spaceBoundariesVisible: true, // Don't show IfcSpace boundaries in viewpoint (default)
        openingsVisible: false, // Don't force IfcOpening types visible in viewpoint (default)
      });

      const viewpointStr = JSON.stringify(viewpoint, null, 2);

      const link = document.createElement('a');
      link.setAttribute(
        'href',
        'data:text/plain;charset=utf-8,' + encodeURIComponent(viewpointStr),
      );
      link.setAttribute('download', 'bcfViewpoint.json');
      link.click();
    }, []);

    return (
      <Container width={width} height={height}>
        <canvas ref={bimCanvas} id={canvasID} width={width} height={height} />
        {navCubeSettings ? (
          <canvas
            style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
            }}
            id={navCubeSettings.canvasId}
            width={navCubeSettings.canvasWidth}
            height={navCubeSettings.canvasHeight}
          />
        ) : null}

        {isDev && (
          <>
            <DevPanel isDevPanelVisible={isDevPanelVisible}>
              <TreeViewContainer id="treeViewContainer" />
              <Buttons>
                <IconButton onClick={downloadBCF}>
                  <SaveIcon />
                </IconButton>
              </Buttons>
            </DevPanel>
            <IconButton
              onClick={toggleDevPanel}
              style={{ position: 'absolute', left: 10, top: 10 }}
            >
              {isDevPanelVisible ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </>
        )}
      </Container>
    );
  };

  return ModelViewer;
};

const DevPanel = styled.div<{ isDevPanelVisible: boolean }>`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #fff9;
  backdrop-filter: blur(15px);
  opacity: ${({ isDevPanelVisible }) => (isDevPanelVisible ? 1 : 0)};
  margin-left: ${({ isDevPanelVisible }) => (isDevPanelVisible ? 0 : -500)}px;
  transition: all 0.5s ease-in-out;
  padding: 30px 10px 10px 10px;
  box-sizing: border-box;
  border-radius: 0;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TreeViewContainer = styled.div`
  flex: 1;
  overflow: auto;
  width: 400px;
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  a.plus,
  a.minus {
    width: 10px;
    display: inline-block;
  }

  ul {
    list-style: none;
    padding: 0 0 0 20px;
  }
`;

const Container = styled.div<{
  width: number;
  height: number;
}>`
  display: block;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  position: relative;
  background: linear-gradient(rgb(39, 120, 187), rgb(151, 193, 219));
  overflow: hidden;
`;
