import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BIMOverlay, BimOverlayProvider, useBimOverlayContext } from '@tuxmart/ui';
import React, { FC, useMemo } from 'react';
import { ViewerProps } from '../Viewer';
import { XKTViewer } from '../Viewers';

export default {
  title: 'Viewer/BIMOverlay',
  component: XKTViewer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof XKTViewer>;

const Template: ComponentStory<typeof XKTViewer> = (args) => {
  return (
    <BimOverlayProvider>
      <BIMOverlay
        underlay={<Underlay {...args} />}
        overlay={<Overlay />}
        width={1200}
        height={600}
      />
    </BimOverlayProvider>
  );
};

const Underlay: FC<ViewerProps> = ({ ...args }) => {
  const { setSelectedEntityId, setModelXY } = useBimOverlayContext();

  const viewer = useMemo(
    () => <XKTViewer {...args} onSelectEntity={setSelectedEntityId} onUpdateXY={setModelXY} />,
    [args, setModelXY, setSelectedEntityId],
  );
  return viewer;
};

const Overlay: FC = () => {
  const { selectedEntityId } = useBimOverlayContext();

  return (
    <div
      style={{
        width: 200,
        height: 200,
        background: 'green',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontWeight: 'bold',
      }}
    >
      {selectedEntityId ? JSON.stringify(selectedEntityId) : 'no entities selected'}
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  canvasID: 'canvas-xkt',
  width: 1200,
  height: 600,
  overlay: <div style={{ display: 'block', width: 200, height: 200 }}>overlay</div>,
  models: [
    {
      id: 'QD-01-A',
      src: './QD-01-A-R02-210917.xkt',
      performance: true,
    },
    {
      id: 'QD-02-A',
      src: './QD-02-A.xkt',
      performance: true,
    },
    {
      id: 'QD-03-A',
      src: './QD-03-A.xkt',
      performance: true,
    },
  ],
  navCubeSettings: {
    canvasId: 'nav-cube-settings',
    canvasWidth: 200,
    canvasHeight: 200,
  },
  enableScreenshot: true,
  isDev: true,
};
