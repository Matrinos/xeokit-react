import { makeViewer } from './Viewer';
import { GLTFLoaderPlugin, XKTLoaderPlugin } from '@xeokit/xeokit-sdk';

export const GLTFViewer = makeViewer(GLTFLoaderPlugin);
export const XKTViewer = makeViewer(XKTLoaderPlugin);
