import { makeViewer } from './Viewer';
import { GLTFLoaderPlugin, XKTLoaderPlugin } from '@tuxmart/xeokit-sdk';
export { EditorViewer } from './EditorViewer';
export const GLTFViewer = makeViewer(GLTFLoaderPlugin);
export const XKTViewer = makeViewer(XKTLoaderPlugin);
