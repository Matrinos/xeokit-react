import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { XKTViewer } from '../Viewers';

export default {
  title: 'Viewer/XKTViewer',
  component: XKTViewer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof XKTViewer>;

const Template: ComponentStory<typeof XKTViewer> = (args) => {
  return <XKTViewer {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  canvasID: 'canvas-xkt',
  width: 1200,
  height: 600,
  models: [
    {
      id: 'QD-01-A',
      src: './QD-01-A-R02-210917.xkt',
      performance: true,
    },
    {
      id: 'QD-02-A',
      src: './QD-02-A.xkt',
      // edges: true,
      performance: true,
    },
    // {
    //   id: 'QD-03-S',
    //   src: './QD-03-S.xkt',
    //   // edges: true,
    //   performance: true,
    // },
    // {
    //   id: 'QD-01-S',
    //   src: './QD-01-S.xkt',
    //   // edges: true,
    //   performance: true,
    // },
    // {
    //   id: 'QD-02-S',
    //   src: './QD-02-S.xkt',
    //   // edges: true,
    //   performance: true,
    // },
    {
      id: 'QD-03-A',
      src: './QD-03-A.xkt',
      // edges: true,
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
