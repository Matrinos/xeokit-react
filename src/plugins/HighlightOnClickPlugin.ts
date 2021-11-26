import { Entity, Plugin, Viewer } from '@tuxmart/xeokit-sdk';
import { Camera } from '@tuxmart/xeokit-sdk/viewer/scene/camera/Camera';
import { get2dFrom3d, getAABBCenter } from '../utils';

interface HighlightOnClickPluginParams {
  onSelectEntity?: (
    entityId: string,
    overlayPos: { x: number; y: number },
    entityPos: { x: number; y: number },
  ) => void;
  onUnselectEntity?: (id: string) => void;
}

const getAABBCenter2DPosition = (center: number[], viewer: Viewer) => {
  return get2dFrom3d(
    viewer.scene.canvas.canvas.clientWidth,
    viewer.scene.canvas.canvas.clientHeight,
    [...(viewer.camera as Camera).viewMatrix],
    center,
  );
};

export class HighlightOnClickPlugin extends Plugin {
  viewer: Viewer;
  subId: string;
  constructor(
    viewer: Viewer,
    params?: Partial<HighlightOnClickPluginParams>,
    id = 'HighlightOnClickPlugin',
  ) {
    super(id, viewer, params);
    this.viewer = viewer;
    const scene = viewer.scene;
    this.subId = scene?.input.on('mouseclicked', (coords: [number, number]) => {
      const hit = scene.pick({
        canvasPos: coords,
      });

      if (hit) {
        const ett = hit.entity as Entity;
        if (!ett.highlighted) {
          ett.highlighted = true;
          const aabb = ett.aabb;
          const center = getAABBCenter(aabb);
          const [x, y] = getAABBCenter2DPosition(center, viewer);
          const num = viewer.scene.highlightedObjectIds.length ?? 0;
          params?.onSelectEntity?.(`${ett.id}`, { x: 100 + num * 20, y: 100 + num * 20 }, { x, y });
        } else {
          params?.onUnselectEntity?.(`${ett.id}`);
          ett.highlighted = false;
        }
      }
    });
  }

  destroy() {
    super.destroy();
    this.viewer.scene.input.off(this.subId);
  }
}
