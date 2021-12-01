import { Plugin, Viewer } from '@tuxmart/xeokit-sdk';
import { forEach } from 'lodash';

interface ModelsManagerPluginParams {
  onSelectEntity?: (
    entityId: string,
    overlayPos: { x: number; y: number },
    entityPos: { x: number; y: number },
  ) => void;
  onUnselectEntity?: (id: string) => void;
}

export class ModelsManagerPlugin extends Plugin {
  viewer: Viewer;
  constructor(
    viewer: Viewer,
    params?: Partial<ModelsManagerPluginParams>,
    id = 'ModelsManagerPlugin',
  ) {
    super(id, viewer, params);
    this.viewer = viewer;
  }

  cleanup(): void {
    forEach(this.viewer.scene.models, (model) => {
      model.destroy();
    });
    forEach(this.viewer.metaScene.metaModels, (metaModel) =>
      this.viewer.metaScene.destroyMetaModel(`${metaModel.id}`),
    );
  }
}
