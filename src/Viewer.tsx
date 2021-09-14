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
import { FC, useCallback, useEffect, useRef } from 'react';

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

export interface ViewerProps {
  canvasID: string;
  width: number;
  height: number;
  camera?: Camera;
  models: Model[];
  bcfViewpoint?: BCFViewpointsPlugin;
  eventToPickOn?: string;
  navCubeSettings?: NavCubeSettingsItem;
  enableScreenshot?: boolean;
  components?: any[];
  plugins?: any[];
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
    enableScreenshot,
    plugins,
    components,
  }) => {
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
        {enableScreenshot ? (
          <button
            type="button"
            id="take-screenshot"
            className="btn btn-primary"
            onClick={takeScreenshot}
          >
            Take Screenshot
          </button>
        ) : null}
        <TreeViewContainer id="treeViewContainer" />
        <button
          onClick={() => {
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
          }}
        >
          download bcf
        </button>
      </Container>
    );
  };

  return ModelViewer;
};

const TreeViewContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background: #fff5;
`;

const Container = styled.div<{
  width: number;
  height: number;
}>`
  display: block;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  position: relative;
  background: linear-gradient(rgb(39, 120, 187), rgb(151, 193, 219));
`;
