declare module 'xeokit-react' {
  interface Model {
    id: string;
    src: string;
  }

  interface NavCubeSettingsItem {
    canvasId: string;
    canvasWidth?: number;
    canvasHeight?: number;
  }

  export interface ViewerProps {
    canvasID: string;
    width?: number;
    height?: number;
    camera?: any;
    models: Model[];
    bcfViewpoint?: any;
    eventToPickOn?: string;
    navCubeSettings?: NavCubeSettingsItem;
    enableScreenshot?: boolean;
  }

  class GLTFViewer extends React.Component<ViewerProps, any> {}
  class XKTViewer extends React.Component<ViewerProps, any> {}

  export { GLTFViewer , XKTViewer };
}