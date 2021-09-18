import styled from '@emotion/styled';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import SaveIcon from '@material-ui/icons/Save';
import {
  BCFViewpointsPlugin,
  Entity,
  FastNavPlugin,
  GLTFLoaderPlugin,
  StoreyViewsPlugin,
  TreeViewPlugin,
  Viewer,
  XKTLoaderPlugin,
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
    const storeyViewsPlugin = useRef<StoreyViewsPlugin>();
    const setUpViewer = useCallback(() => {
      viewer.current = new Viewer({
        canvasId: canvasID,
        saoEnabled: false,
      });
      // viewer.current.on;

      // new AmbientLight(viewer.current.scene, {
      //   color: [0.0, 0.3, 0.7],
      //   intensity: 0.5,
      // });

      // new DirLight(viewer.current.scene, {
      //   id: 'keyLight',
      //   dir: [0.8, -0.6, -0.8],
      //   color: [0.5, 0.5, 0.5],
      //   intensity: 0.5,
      //   space: 'view',
      // });

      modelLoader.current = new LoaderPlugin(viewer.current, {
        objectDefaults: {
          IfcOpeningElement: {
            pickable: false,
            visible: false,
          },

          IfcSpace: {
            colorize: [1, 0, 0],
            pickable: true,
            visible: true,
            opacity: 1,
          },

          IfcWindow: {
            colorize: [1, 0, 0],
            opacity: 1,
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

      // const viewCullPlugin = new ViewCullPlugin(viewer.current, {
      //   maxTreeDepth: 20,
      // });

      // console.log(modelLoader.current.supportedVersions)
      // bcfViewpointsPlugin.current = new BCFViewpointsPlugin(viewer.current);

      storeyViewsPlugin.current = new StoreyViewsPlugin(viewer.current);

      storeyViewsPlugin.current.on('storeys', () => {
        console.log(storeyViewsPlugin.current?.storeys);
        console.log(viewer.current?.metaScene.getObjectIDsByType('IfcSpace'));
        console.log(viewer.current?.scene.setObjectsHighlighted([], true));
        // console.log(viewer.current?.scene.setObjectsSelected(['1Od04J4LTB1BhDUtObuFUL'], true));
        storeyViewsPlugin.current?.showStoreyObjects('3P3Lub7Zj769ajSMElBcQ3', {
          hideOthers: true,
        });
      });
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
      console.log(entities);
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
          console.log(hit.entity);
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

  /* button {
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 24px;
    border-radius: 8px;
    padding: 8px;
    font-size: 12px;
    &:hover {
      background: #0006;
    }
  }

  button + button {
    margin-left: 10px;
  } */
`;
