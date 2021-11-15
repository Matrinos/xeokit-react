export { makeViewer } from './Viewer';
import { GLTFLoaderPlugin, XKTLoaderPlugin } from '@tuxmart/xeokit-sdk';
import { makeViewer } from './Viewer';
export const GLTFViewer = makeViewer(GLTFLoaderPlugin);
export const XKTViewer = makeViewer(XKTLoaderPlugin);
