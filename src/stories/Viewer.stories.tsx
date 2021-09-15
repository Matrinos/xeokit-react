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
  width: 900,
  height: 600,
  models: [
    {
      id: 'xkt-model',
      src: './QD-01-S.xkt',
      metaModelSrc: './QD-01-S.json',
      // edges: true,
      performance: true,
    },
    {
      id: 'QD-01-S',
      src: './QD-01-A.xkt',
      metaModelSrc: './QD-01-A.json',
      // edges: true,
      performance: true,
    },
    // {
    //   id: 'QD-01-MEP',
    //   src: './models/QD-01-MEP.xkt',
    //   metaModelSrc: './models/QD-01-MEP.json',
    //   // edges: true,
    //   performance: true,
    // },
  ],
  navCubeSettings: {
    canvasId: 'nav-cube-settings',
    canvasWidth: 200,
    canvasHeight: 200,
  },
  enableScreenshot: true,
  isDev: false,
};
