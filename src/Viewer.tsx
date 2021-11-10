import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import SaveIcon from '@mui/icons-material/Save';
import { IconButton } from '@mui/material';
import { Point2D } from '@tuxmart/ui';
import {
  BCFViewpointsPlugin,
  Entity,
  FastNavPlugin,
  GLTFLoaderPlugin,
  StoreyViewsPlugin,
  TreeViewPlugin,
  Viewer,
  XKTLoaderPlugin,
} from '@tuxmart/xeokit-sdk';
import { Camera } from '@tuxmart/xeokit-sdk/viewer/scene/camera/Camera';
import { forEach, noop } from 'lodash';
import {
  FC,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import { drawAABB, get2dFrom3d } from './utils';

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

type Colorize = [number, number, number]; // [r, g, b]

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
  onUpdateXY?: (pt: Point2D) => void;
  onSelectEntity?: (id?: string) => void;
  onUnselectEntity?: () => void;
}

export interface RefProps {
  unselect?: () => void;
}

interface ModelEntity extends Entity {
  on: (event: string, callback: (...args: unknown[]) => void) => void;
}

export const makeViewer = (
  LoaderPlugin: typeof GLTFLoaderPlugin | typeof XKTLoaderPlugin,
): FC<ViewerProps> => {
  const ModelViewer = forwardRef<RefProps, ViewerProps>(
    (
      {
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
        // onUnselectEntity,
      },
      forwardedRef,
    ) => {
      const [isDevPanelVisible, setIsDevPanelVisible] = useState(false);
      const lineCanvas = useRef<HTMLCanvasElement>(null);
      const bimCanvas = useRef<HTMLCanvasElement>(null);
      const viewer = useRef<Viewer>();
      const modelLoader = useRef<InstanceType<typeof LoaderPlugin>>();
      const bcfViewpointsPlugin = useRef<BCFViewpointsPlugin>();
      const storeyViewsPlugin = useRef<StoreyViewsPlugin>();
      const event = useRef<string>();

      const unselect = noop;
      useImperativeHandle(forwardedRef, () => ({
        unselect,
      }));

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

        modelLoader.current = new LoaderPlugin(viewer.current, {
          objectDefaults: {
            IfcOpeningElement: {
              pickable: false,
              visible: false,
            },

            IfcSpace: {
              colorize: [0.5, 0.5, 1],
              pickable: true,
              visible: true,
              opacity: 0.3,
            },

            IfcWindow: {
              colorize: [0.137255, 0.403922, 0.870588],
              opacity: 0.5,
            },

            IfcPlate: {
              colorize: [0.8470588235, 0.427450980392, 0],
              opacity: 0.3,
            },

            DEFAULT: {},
            // IfcSpace: {
            //   pickable: true,
            //   opacity: 1,
            // },
          },
          maxGeometryBatchSize: 50000000,
        });
        new FastNavPlugin(viewer.current, {});
      }, [canvasID]);

      const setCamera = useCallback(() => {
        // if (camera) {
        //   const { eye, look, up } = camera;
        //   camera.eye = eye;
        //   camera.look = look;
        //   camera.up = up;
        // }
        // (viewer.current?.camera as Camera).projection = 'ortho';
      }, []);

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

      const loadPlugins = useCallback(
        (viewerObj: Viewer) => {
          forEach(plugins, (plugin) => {
            const [, ...restArgs] = plugin.args || [];
            new plugin.plugin(viewerObj, ...restArgs);
          });

          forEach(components, (component) => {
            const [, ...restArgs] = component.args || [];
            new component.component(viewerObj.scene, ...restArgs);
          });

          if (isDev) {
            new TreeViewPlugin(viewerObj, {
              containerElement: document.getElementById('treeViewContainer'),
            });
          }
        },
        [components, isDev, plugins],
      );

      const pickEntity = useCallback(() => {
        let lastEntity: Entity | undefined;
        let lastColorize: Colorize;

        const scene = viewer.current?.scene;
        const cam = viewer.current?.camera as Camera;
        event.current && cam.off(event.current);

        scene?.input.on(eventToPickOn, (coords: [number, number]) => {
          const hit = scene.pick({
            canvasPos: coords,
          });

          if (hit) {
            if (!lastEntity || hit.entity.id !== lastEntity.id) {
              if (lastEntity) {
                lastEntity.colorize = lastColorize;
              }
              lastEntity = hit.entity;
              lastColorize = hit.entity.colorize.slice();
              hit.entity.colorize = [0.0, 1.0, 1.0];

              const ett = hit.entity as Entity;
              onSelectEntity(ett.id);
              const aabb = ett.aabb;
              const center = [
                (aabb[3] + aabb[0]) / 2,
                (aabb[4] + aabb[1]) / 2,
                (aabb[5] + aabb[2]) / 2,
              ];
              event.current = cam.on('matrix', (e: number[]) => {
                const bimCtx = lineCanvas.current?.getContext('2d');

                if (bimCtx) {
                  if (debug) drawAABB(bimCtx, [...e], [...aabb]);
                }
                const [x, y] = get2dFrom3d(width, height, [...e], center);
                onUpdateXY({ x, y });
              });
            }
          } else if (lastEntity) {
            lastEntity.colorize = lastColorize;
            lastEntity = undefined;
            onSelectEntity();
          }
        });
      }, [debug, eventToPickOn, height, onSelectEntity, onUpdateXY, width]);

      useEffect(() => {
        (async () => {
          setUpViewer();
          setCamera();
          // (viewer.current?.camera as Camera).projection = 'ortho';
          viewer.current && loadPlugins(viewer.current);
          await loadModels();
          if (bcfViewpoint) setBCFViewpoints();
          pickEntity();
        })();
      }, [
        bcfViewpoint,
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

      const takeScreenshot = useCallback(() => {
        // const imageData = viewer.current?.getSnapshot({
        //   format: 'png',
        // });

        // if (imageData) {
        //   const link = document.createElement('a');
        //   link.setAttribute('href', imageData);
        //   link.setAttribute('download', 'model-screenshot');
        //   link.click();
        // }

        const mp = storeyViewsPlugin.current?.createStoreyMap('3P3Lub7Zj769ajSMElBcQ3', {
          width: 1920,
          height: 1920,
        });
        const imageData = mp?.imageData;

        if (imageData) {
          const link = document.createElement('a');
          link.setAttribute('href', imageData);
          link.setAttribute('download', 'storey-map');
          link.click();
        }
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
                  <IconButton
                    type="button"
                    id="take-screenshot"
                    className="btn btn-primary"
                    onClick={takeScreenshot}
                  >
                    <PhotoCameraIcon />
                  </IconButton>
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
    },
  );

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
