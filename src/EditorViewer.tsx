import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';
import FileIcon from '@mui/icons-material/FileUpload';
import MenuIcon from '@mui/icons-material/Menu';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import SaveIcon from '@mui/icons-material/Save';
import { IconButton, Input } from '@mui/material';
import { Point2D } from '@tuxmart/ui';
import {
  dispatch,
  EntityPreserveVisitor,
  parse,
  writeXKTModelToArrayBuffer,
  XKTModel,
  XKTModelProperties,
} from '@tuxmart/xeokit-convert';
import {
  BCFViewpointsPlugin,
  Entity,
  FastNavPlugin,
  TreeViewPlugin,
  Viewer,
  XKTLoaderPlugin,
} from '@tuxmart/xeokit-sdk';
import { Camera } from '@tuxmart/xeokit-sdk/viewer/scene/camera/Camera';
import { ChangeEventHandler, FC, useCallback, useEffect, useRef, useState } from 'react';

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
  eventToPickOn?: string;
  navCubeSettings?: NavCubeSettingsItem;
  onUpdateXY?: (pt: Point2D) => void;
  onSelectEntity?: (id?: string) => void;
  onUnselectEntity?: () => void;
}

export const EditorViewer: FC<ViewerProps> = ({
  canvasID,
  width,
  height,
  eventToPickOn = 'mouseclicked',
  navCubeSettings,
}) => {
  const [isDevPanelVisible, setIsDevPanelVisible] = useState(false);
  const modelForExport = useRef<XKTModel>();
  const bimCanvas = useRef<HTMLCanvasElement>(null);
  const entities = useRef<string[]>([]);
  const inputRef = useRef<typeof Input>(null);
  const colors = useRef<Record<string, Colorize>>({});
  const viewer = useRef<Viewer>();
  const modelLoader = useRef<InstanceType<typeof XKTLoaderPlugin>>();
  const bcfViewpointsPlugin = useRef<BCFViewpointsPlugin>();
  const event = useRef<string>();

  useEffect(() => {
    return () => {
      if (viewer.current) {
        viewer.current.destroy();
      }
    };
  }, []);

  const setUpViewer = useCallback(() => {
    viewer.current = new Viewer({
      canvasId: canvasID,
      saoEnabled: true,
    });

    viewer.current.scene.pointsMaterial.roundPoints = false;

    modelLoader.current = new XKTLoaderPlugin(viewer.current, {
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
      },
      maxGeometryBatchSize: 50000000,
    });
    new FastNavPlugin(viewer.current, {});
  }, [canvasID]);

  const loadPlugins = useCallback((viewerObj: Viewer) => {
    new TreeViewPlugin(viewerObj, {
      containerElement: document.getElementById('treeViewContainer'),
    });
  }, []);

  const pickEntity = useCallback(() => {
    const scene = viewer.current?.scene;
    const cam = viewer.current?.camera as Camera;
    event.current && cam.off(event.current);

    scene?.input.on(eventToPickOn, (coords: [number, number]) => {
      const hit = scene.pick({
        canvasPos: coords,
      });

      if (hit) {
        const entity = hit.entity as Entity;
        const entityId = `${entity.id}`;
        if (entities.current.includes(entityId)) {
          entities.current = entities.current.filter((id) => id !== entityId);
          hit.entity.colorize = colors.current[entityId];
        } else {
          entities.current.push(entityId);
          colors.current[entityId] = [
            hit.entity.colorize[0],
            hit.entity.colorize[1],
            hit.entity.colorize[2],
          ];
          hit.entity.colorize = [0.0, 1.0, 1.0];
        }
        console.log(colors.current);
      }
    });
  }, [eventToPickOn]);

  useEffect(() => {
    (async () => {
      setUpViewer();
      viewer.current && loadPlugins(viewer.current);
      pickEntity();
    })();
  }, [loadPlugins, pickEntity, setUpViewer]);

  const toggleDevPanel = useCallback(() => {
    setIsDevPanelVisible((prev) => !prev);
  }, []);

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
    link.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(viewpointStr));
    link.setAttribute('download', 'bcfViewpoint.json');
    link.click();
  }, []);

  const onSelectJSON: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = useCallback(
    (e) => {
      const fr = new FileReader();
      const files = (e.target as HTMLInputElement).files;
      if (files) {
        fr.readAsText(files[0]);
        fr.onload = (ev) => {
          if (ev.target) {
            const JSONStr = ev.target.result as string;
            const model = parse(JSON.parse(JSONStr));
            modelForExport.current = parse(JSON.parse(JSONStr));
            console.log(model);
            model.finalize(true);
            const m = modelLoader.current?.load({
              id: files[0].name,
              xkt: writeXKTModelToArrayBuffer(model),
              edges: true,
              performance: false,
            });
            m.on('loaded', viewer.current?.cameraFlight.flyTo(m));
          }
        };
      }
    },
    [],
  );

  const preserve = useCallback(() => {
    const ids = entities.current;
    const visitor = new EntityPreserveVisitor(ids, modelForExport.current);
    dispatch(XKTModelProperties.model, modelForExport.current, visitor);
    const result = visitor.done();
    const link = document.createElement('a');
    const buffer = Buffer.from(writeXKTModelToArrayBuffer(result));
    const blob = new Blob([buffer], { type: 'application/octet-stream' });
    link.setAttribute('href', URL.createObjectURL(blob));
    link.setAttribute('download', 'export.xkt');
    link.click();
    downloadBCF();
  }, [downloadBCF]);

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
          <IconButton onClick={preserve}>
            <SaveIcon />
          </IconButton>
          <label htmlFor="icon-button-file">
            <Input ref={inputRef} type="file" id="icon-button-file" onChange={onSelectJSON} />
            <IconButton color="primary" aria-label="Upload XKT JSON" component="span">
              <FileIcon />
            </IconButton>
          </label>
        </Buttons>
      </DevPanel>
      <IconButton onClick={toggleDevPanel} style={{ position: 'absolute', left: 10, top: 10 }}>
        {isDevPanelVisible ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
    </Container>
  );
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
`;
