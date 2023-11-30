import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { XKTViewer } from '../Viewers';

export default {
  title: 'Viewer/XKTViewer',
  component: XKTViewer,
  argTypes: {},
} as Meta<typeof XKTViewer>;

const Template: StoryFn<typeof XKTViewer> = (args) => {
  return <XKTViewer {...args} />;
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
      src: 'https://azure-1254421660.cos.ap-nanjing.myqcloud.com/models/v9/QD-01-A-R02-210917.xkt',
      performance: true,
    },
    // {
    //   id: 'QD-02-A',
    //   src: './QD-02-A.xkt',
    //   performance: true,
    // },
    // {
    //   id: 'QD-03-A',
    //   src: './QD-03-A.xkt',
    //   performance: true,
    // },
  ],
};

export const Vertical = Template.bind({});

Vertical.args = {
  ...Primary.args,
  canvasID: 'canvas-xkt-vertical',
  width: 726,
  height: 1180,
};
