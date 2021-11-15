import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FastNavPlugin, Viewer } from '@tuxmart/xeokit-sdk';
import React, { useCallback } from 'react';
import { XKTViewer } from '../Viewers';

export default {
  title: 'Viewer/XKTViewer',
  component: XKTViewer,
  argTypes: {},
} as ComponentMeta<typeof XKTViewer>;

const Template: ComponentStory<typeof XKTViewer> = (args) => {
  const onLoad = useCallback((viewer?: Viewer) => {
    new FastNavPlugin(viewer);
  }, []);

  return <XKTViewer {...args} onLoad={onLoad} />;
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
};

export const Vertical = Template.bind({});

Vertical.args = {
  ...Primary.args,
  canvasID: 'canvas-xkt-vertical',
  width: 726,
  height: 1180,
};
