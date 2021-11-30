import styled from '@emotion/styled';
import {
  BCFViewpointsPlugin,
  Entity,
  GLTFLoaderPlugin,
  Viewer,
  XKTLoaderPlugin,
} from '@tuxmart/xeokit-sdk';
import { Camera } from '@tuxmart/xeokit-sdk/viewer/scene/camera/Camera';
import { noop, values } from 'lodash';
import {
  CSSProperties,
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import { drawAABB, get2dFrom3d, getAABBCenter } from './utils';

interface ModelBase {
  id: string;
  metaModelSrc?: string;
  edges?: boolean;
  performance?: boolean;
}

export type Model =
  | (ModelBase & {
      src: string;
      xkt?: never;
    })
  | {
      src?: never;
      xkt: ArrayBuffer;
    };

interface Point2D {
  x: number;
  y: number;
}

interface Point3D extends Point2D {
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
  models: Model[];
  bcfViewpoint?: BCFViewpointsJSON;
  onUpdateXY?: (id: string, pt: Point2D) => void;
  onLoad?: (viewer?: Viewer) => void;
  isDev?: boolean;
  style?: CSSProperties;
}

interface ModelEntity extends Entity {
  on: (event: string, callback: (...args: unknown[]) => void) => void;
}

export interface ModelViewerRef {
  getViewer: () => Viewer | undefined;
}

export const makeViewer = (
  LoaderPlugin: typeof GLTFLoaderPlugin | typeof XKTLoaderPlugin,
): ForwardRefExoticComponent<ViewerProps & RefAttributes<ModelViewerRef>> => {
  const ModelViewer = forwardRef<ModelViewerRef, ViewerProps>(
    (
      {
        canvasID,
        width,
        height,
        models,
        bcfViewpoint,
        onUpdateXY = noop,
        onLoad,
        isDev = false,
        style,
      },
      ref,
    ) => {
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

      useImperativeHandle(ref, () => ({
        getViewer: () => viewer.current,
      }));

      const setUpViewer = useCallback(() => {
        viewer.current = new Viewer({
          canvasId: canvasID,
          saoEnabled: true,
        });
        viewer.current.scene.pointsMaterial.roundPoints = false;
      }, [canvasID]);

      const initializeModelLoader = useCallback(() => {
        modelLoader.current = new LoaderPlugin(viewer.current, {
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
                if (isDev) drawAABB(bimCtx, [...e], [...ett.aabb]);
              }
              const [x, y] = get2dFrom3d(width, height, [...e], center);
              // TODO: Batch this update
              onUpdateXY(ett.id, { x, y });
            });
          });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [isDev, height, width]);

      const setBCFViewpoints = useCallback((bcf) => {
        bcfViewpointsPlugin.current?.setViewpoint(bcf);
      }, []);

      const loadModel = useCallback(
        (model: Model) =>
          modelLoader.current?.load({
            edges: true,
            performance: true,
            excludeUnclassifiedObjects: true,
            ...model,
          }) as ModelEntity,
        [],
      );

      const loadModels = useCallback(
        async (_models: Model[]) => {
          const entities = _models.map(loadModel);
          await Promise.all(
            entities.map((model) => new Promise((resolve) => model.on('loaded', resolve))),
          );
        },
        [loadModel],
      );

      useEffect(() => {
        (async () => {
          setUpViewer();
          initializeModelLoader();
          await loadModels(models);
          if (bcfViewpoint) setBCFViewpoints(bcfViewpoint);
          setCamera();
          onLoad?.(viewer.current);
        })();
      }, [
        bcfViewpoint,
        initializeModelLoader,
        loadModels,
        models,
        onLoad,
        setBCFViewpoints,
        setCamera,
        setUpViewer,
      ]);

      return (
        <Container style={style} width={width} height={height}>
          <canvas ref={bimCanvas} id={canvasID} width={width} height={height} />
        </Container>
      );
    },
  );

  return ModelViewer;
};

const Container = styled.div<{
  width: number;
  height: number;
}>`
  display: block;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  position: relative;
  overflow: hidden;
`;
