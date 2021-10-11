import styled from '@emotion/styled';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import SaveIcon from '@mui/icons-material/Save';
import {
  BCFViewpointsPlugin,
  Entity,
  FastNavPlugin,
  GLTFLoaderPlugin,
  math,
  StoreyViewsPlugin,
  TreeViewPlugin,
  Viewer,
  XKTLoaderPlugin,
} from '@tuxmart/xeokit-sdk';
import { Camera } from '@tuxmart/xeokit-sdk/viewer/scene/camera/Camera';
import { forEach } from 'lodash';
import { FC, useCallback, useEffect, useRef, useState, useMemo } from 'react';
import Draggable, { DraggableBounds, DraggableData, DraggableEvent } from 'react-draggable';

const get2dFrom3d = (
  w: number,
  h: number,
  cameraMatrix: number[],
  point: number[],
): [number, number] => {
  const x = math.transformPoint4(cameraMatrix, [...point, 1]);
  // console.log(x)
  // console.log(cameraMatrix);
  return [-(((x[0] / x[2] / x[3]) * w) / 2) + w / 2, (x[1] / x[2] / x[3]) * h + h / 2];
};

const drawLine = (ctx: CanvasRenderingContext2D, from: [number, number], to: [number, number]) => {
  ctx.moveTo(from[0], from[1]);
  ctx.lineTo(to[0], to[1]);
};

const drawAABB = (
  canvasContext: CanvasRenderingContext2D,
  cameraMatrix: number[],
  aabb: number[],
) => {
  // vertices of AABB
  const vertices = [
    [aabb[0], aabb[1], aabb[2]],
    [aabb[0], aabb[1], aabb[5]],
    [aabb[0], aabb[4], aabb[2]],
    [aabb[0], aabb[4], aabb[5]],
    [aabb[3], aabb[1], aabb[2]],
    [aabb[3], aabb[1], aabb[5]],
    [aabb[3], aabb[4], aabb[2]],
    [aabb[3], aabb[4], aabb[5]],
  ];

  const points2d = vertices.map((p) =>
    get2dFrom3d(canvasContext.canvas.width, canvasContext.canvas.height, cameraMatrix, p),
  );
  const bimCtx = canvasContext;
  if (bimCtx) {
    bimCtx.strokeStyle = 'rgb(0, 255, 0)';
    bimCtx.beginPath();

    drawLine(bimCtx, points2d[0], points2d[1]);
    drawLine(bimCtx, points2d[0], points2d[2]);
    drawLine(bimCtx, points2d[0], points2d[4]);
    drawLine(bimCtx, points2d[7], points2d[3]);
    drawLine(bimCtx, points2d[7], points2d[5]);
    drawLine(bimCtx, points2d[7], points2d[6]);
    drawLine(bimCtx, points2d[2], points2d[6]);
    drawLine(bimCtx, points2d[3], points2d[2]);
    drawLine(bimCtx, points2d[1], points2d[3]);
    drawLine(bimCtx, points2d[1], points2d[5]);
    drawLine(bimCtx, points2d[4], points2d[5]);
    drawLine(bimCtx, points2d[4], points2d[6]);

    bimCtx.stroke();
  }
};

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
    overlay,
  }) => {
    const [isDevPanelVisible, setIsDevPanelVisible] = useState(false);
    // const prevCoords = useRef([0, 0]);
    // const [overlayCoords, setOverlayCoords] = useState([0, 0]);
    const overlayCoordsRef = useRef([0, 0]);
    const overlayRef = useRef<HTMLDivElement>(null);
    const modelCenterRef = useRef([0, 0]);
    const lineCanvas = useRef<HTMLCanvasElement>(null);
    const bimCanvas = useRef<HTMLCanvasElement>(null);
    const viewer = useRef<Viewer>();
    const modelLoader = useRef<InstanceType<typeof LoaderPlugin>>();
    const bcfViewpointsPlugin = useRef<BCFViewpointsPlugin>();
    const storeyViewsPlugin = useRef<StoreyViewsPlugin>();
    const event = useRef<string>();

    useEffect(() => {
      return () => {
        if (viewer.current) {
          viewer.current.destroy();
        }
      };
    }, []);

    // useEffect(() => {
    //   const bimCtx = lineCanvas.current?.getContext('2d');
    //   if (bimCtx) {
    //     const cam = viewer.current?.camera as Camera;

    //     // bimCtx.clearRect(prevCoords.current[0], prevCoords.current[1], 100, 100);
    //     bimCtx.clearRect(0, 0, 600, 600);
    //     bimCtx.strokeStyle = 'rgb(0, 0, 0)';
    //     bimCtx.beginPath();
    //     bimCtx.moveTo(0, 0);
    //     bimCtx.lineTo(overlayCoords[0], overlayCoords[1]);
    //     bimCtx.stroke();
    //     // bimCtx.line(overlayCoords[0], overlayCoords[1], 100, 100);
    //     // prevCoords.current = overlayCoords;
    //   }
    // }, [overlayCoords]);

    // useEffect(() => {
    // const bimCtx = bimCanvas.current?.getContext('webgl');
    // console.log(bimCtx);
    // bimCtx.
    // bimCtx.beg
    // if (bimCtx) {
    //   console.log(bimCtx);
    //   // bimCtx.clearRect(prevCoords.current[0], prevCoords.current[1], 100, 100);
    //   bimCtx.clearRect(0, 0, 600, 600);
    //   bimCtx.strokeStyle = 'rgb(0, 0, 0)';
    //   bimCtx.beginPath();
    //   bimCtx.moveTo(0, 0);
    //   bimCtx.lineTo(overlayCoords[0], overlayCoords[1]);
    //   bimCtx.stroke();
    //   // bimCtx.line(overlayCoords[0], overlayCoords[1], 100, 100);
    //   // prevCoords.current = overlayCoords;
    // }
    // }, [overlayCoords]);

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

      // const viewCullPlugin = new ViewCullPlugin(viewer.current, {
      //   maxTreeDepth: 20,
      // });

      // console.log(modelLoader.current.supportedVersions)
      // bcfViewpointsPlugin.current = new BCFViewpointsPlugin(viewer.current);

      // storeyViewsPlugin.current = new StoreyViewsPlugin(viewer.current);

      // storeyViewsPlugin.current.on('storeys', () => {
      //   console.log(storeyViewsPlugin.current?.storeys);
      //   console.log(viewer.current?.metaScene.getObjectIDsByType('IfcSpace'));
      //   console.log(viewer.current?.scene.setObjectsHighlighted([], true));
      //   // console.log(viewer.current?.scene.setObjectsSelected(['1Od04J4LTB1BhDUtObuFUL'], true));
      //   storeyViewsPlugin.current?.showStoreyObjects('3P3Lub7Zj769ajSMElBcKl', { // B001
      //     hideOthers: true,
      //   });
      // });
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


    const drawOverlayLine = useCallback(() => {
      const bimCtx = lineCanvas.current?.getContext('2d');
      if (bimCtx) {
        const grad = bimCtx.createLinearGradient(
          modelCenterRef.current[0],
          modelCenterRef.current[1],
          overlayCoordsRef.current[0],
          overlayCoordsRef.current[1],
        );
        grad.addColorStop(0, 'rgba(255,255,255,0)');
        grad.addColorStop(1, 'rgb(255,255,255)');
        bimCtx.strokeStyle = grad;
        bimCtx.beginPath();
        bimCtx.moveTo(modelCenterRef.current[0], modelCenterRef.current[1]);
        bimCtx.lineTo(overlayCoordsRef.current[0], overlayCoordsRef.current[1]);
        bimCtx.stroke();
      }
    }, []);

    const pickEntity = useCallback(() => {
      let lastEntity: Entity | undefined;
      let lastColorize: Colorize;

      const scene = viewer.current?.scene;

      scene?.input.on(eventToPickOn, (coords: [number, number]) => {
        const hit = scene.pick({
          canvasPos: coords,
        });

        if (hit) {
          if (!lastEntity || hit.entity.id !== lastEntity.id) {
            if (lastEntity) {
              lastEntity.colorize = lastColorize;
            }
            console.log(hit);
            lastEntity = hit.entity;
            lastColorize = hit.entity.colorize.slice();
            hit.entity.colorize = [0.0, 1.0, 1.0];

            const cam = viewer.current?.camera as Camera;
            const ett = hit.entity as Entity;
            const aabb = ett.aabb;
            const center = [
              (aabb[3] + aabb[0]) / 2,
              (aabb[4] + aabb[1]) / 2,
              (aabb[5] + aabb[2]) / 2,
            ];
            event.current && cam.off(event.current);
            event.current = cam.on('matrix', (e: number[]) => {
              const bimCtx = lineCanvas.current?.getContext('2d');

              if (bimCtx) {
                bimCtx.clearRect(0, 0, bimCtx.canvas.width, bimCtx.canvas.height);
                drawAABB(bimCtx, [...e], [...aabb]);
                const [x, y] = get2dFrom3d(width, height, [...e], center);
                modelCenterRef.current = [x, y];
                drawOverlayLine();
              }
            });
          }
        } else if (lastEntity) {
          lastEntity.colorize = lastColorize;
          lastEntity = undefined;
        }
      });
    }, [drawOverlayLine, eventToPickOn, height, width]);

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

    const bounds: DraggableBounds = useMemo(
      () => ({
        left: 0,
        right: width - (overlayRef.current?.getBoundingClientRect().width ?? 0),
        top: 0,
        bottom: height - (overlayRef.current?.getBoundingClientRect().height ?? 0),
      }),
      [height, width],
    );

    const onDrag = useCallback(
      (_: DraggableEvent, data: DraggableData) => {
        const size = overlayRef.current?.getBoundingClientRect();
        overlayCoordsRef.current = [
          data.x + (size?.width ?? 0) / 2,
          data.y + (size?.height ?? 0) / 2,
        ];
        const bimCtx = lineCanvas.current?.getContext('2d');
        bimCtx?.clearRect(0, 0, width, height);
        drawOverlayLine();
      },
      [drawOverlayLine, height, width],
    );

    return (
      <Container width={width} height={height}>
        <canvas ref={bimCanvas} id={canvasID} width={width} height={height} />
        <canvas
          ref={lineCanvas}
          id={'overlay'}
          width={width}
          height={height}
          style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
        />
        <Draggable onDrag={onDrag} bounds={bounds}>
          <div ref={overlayRef} style={{position:'absolute', top: 0, left: 0}}>
            {overlay}
          </div>
        </Draggable>

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
