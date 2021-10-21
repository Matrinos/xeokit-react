import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { EditorViewer } from '../EditorViewer';

export default {
  title: 'Viewer/XKTEditorViewer',
  component: EditorViewer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof EditorViewer>;

const Template: ComponentStory<typeof EditorViewer> = (args) => {
  return <EditorViewer {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  canvasID: 'canvas-xkt',
  width: 1200,
  height: 600,
  overlay: <div style={{display: 'block', width: 200, height: 200}}>overlay</div>,
  models: [
    {
      id: 'QD-01-A',
      src: './duplex.xkt',
      performance: true,
    },
    {
      id: 'QD-02-A',
      src: './QD-02-A.xkt',
      performance: true,
    },
    // {
    //   id: 'QD-03-A',
    //   src: './QD-03-A.xkt',
    //   performance: true,
    // },
  ],
  navCubeSettings: {
    canvasId: 'nav-cube-settings',
    canvasWidth: 200,
    canvasHeight: 200,
  },
  enableScreenshot: true,
  isDev: true,
};


export const Vertical = Template.bind({});

Vertical.args = {
  canvasID: 'canvas-xkt',
  width: 726,
  height: 1180,
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