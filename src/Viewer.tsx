import styled from '@emotion/styled';
import {
  BCFViewpointsPlugin,
  GLTFLoaderPlugin,
  TreeViewPlugin,
  Viewer,
  XKTLoaderPlugin,
  Entity,
} from '@xeokit/xeokit-sdk';
import { Camera } from '@xeokit/xeokit-sdk/viewer/scene/camera/Camera';
import { forEach } from 'lodash';
import { FC, useCallback, useEffect, useRef, useState } from 'react';

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
    camera,
    models,
    bcfViewpoint,
    eventToPickOn = 'mouseclicked',
    navCubeSettings,
    plugins,
    components,
    isDev = false,
  }) => {
    const [isDevPanelVisible, setIsDevPanelVisible] = useState(false);
    const bimCanvas = useRef<HTMLCanvasElement>(null);
    const viewer = useRef<Viewer>();
    const modelLoader = useRef<InstanceType<typeof LoaderPlugin>>();
    const bcfViewpointsPlugin = useRef<BCFViewpointsPlugin>();
    const setUpViewer = useCallback(() => {
      viewer.current = new Viewer({
        canvasId: canvasID,
        saoEnabled: false,
      });
      viewer.current.on;
      modelLoader.current = new LoaderPlugin(viewer.current);
      bcfViewpointsPlugin.current = new BCFViewpointsPlugin(viewer.current);
    }, [canvasID]);

    const setCamera = useCallback(() => {
      if (camera) {
        const { eye, look, up } = camera;
        camera.eye = eye;
        camera.look = look;
        camera.up = up;
      }
    }, [camera]);

    const setBCFViewpoints = useCallback(() => {
      bcfViewpointsPlugin.current?.setViewpoint(bcfViewpoint);
    }, [bcfViewpoint]);

    const loadModels = useCallback(async () => {
      const entities = models.map((model) => modelLoader.current?.load(model) as ModelEntity);
      await Promise.all(
        entities.map((model) => new Promise((resolve) => model.on('loaded', resolve))),
      );
    }, [models]);

    const loadPlugins = useCallback(
      (viewerObj: Viewer) => {
        forEach(plugins, (plugin) => {
          const [_, ...restArgs] = plugin.args || [];
          new plugin.plugin(viewerObj, ...restArgs);
        });

        forEach(components, (component) => {
          const [_, ...restArgs] = component.args || [];
          new component.component(viewerObj.scene, ...restArgs);
        });

        new TreeViewPlugin(viewerObj, {
          containerElement: document.getElementById('treeViewContainer'),
        });
      },
      [components, plugins],
    );

    const pickEntity = useCallback(() => {
      let lastEntity: Entity | undefined;
      let lastColorize: Colorize;

      const scene = viewer.current?.scene;

      scene?.input.on(eventToPickOn, (coords: [number, number]) => {
        const hit = scene.pick({
          canvasPos: coords,
        });

        if (hit) {
          // eslint-disable-next-line no-console
          console.log(hit.entity.id);
          if (!lastEntity || hit.entity.id !== lastEntity.id) {
            if (lastEntity) {
              lastEntity.colorize = lastColorize;
            }
            lastEntity = hit.entity;
            lastColorize = hit.entity.colorize.slice();
            hit.entity.colorize = [0.0, 1.0, 1.0];
          }
        } else if (lastEntity) {
          lastEntity.colorize = lastColorize;
          lastEntity = undefined;
        }
      });
    }, [eventToPickOn]);

    useEffect(() => {
      (async () => {
        setUpViewer();
        setCamera();
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
      const imageData = viewer.current?.getSnapshot({
        format: 'png',
      });

      if (imageData) {
        const link = document.createElement('a');
        link.setAttribute('href', imageData);
        link.setAttribute('download', 'model-screenshot');
        link.click();
      }
    }, [viewer]);

    const downloadBCF = useCallback(() => {
      const viewpoint = bcfViewpointsPlugin.current?.getViewpoint({
        // Options
        spacesVisible: false, // Don't force IfcSpace types visible in viewpoint (default)
        spaceBoundariesVisible: false, // Don't show IfcSpace boundaries in viewpoint (default)
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
              <div>
                <button
                  type="button"
                  id="take-screenshot"
                  className="btn btn-primary"
                  onClick={takeScreenshot}
                >
                  Take Screenshot
                </button>
                <button onClick={downloadBCF}>download bcf</button>
              </div>
            </DevPanel>
            <button onClick={toggleDevPanel} style={{ position: 'absolute', left: 10, top: 10 }}>
              {isDevPanelVisible ? '乂' : '三'}
            </button>
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
