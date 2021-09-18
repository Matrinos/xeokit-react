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
  width: window.innerWidth,
  height: window.innerHeight,
  bcfViewpoint: {
    perspective_camera: {
      camera_view_point: {
        x: -0.8506564685720738,
        y: -70.72938903818137,
        z: 17.675457459366648,
      },
      camera_direction: {
        x: 0.013248321985153301,
        y: 0.16974468385976882,
        z: -0.9853990177922467,
      },
      camera_up_vector: {
        x: 0.07667575524736293,
        y: 0.982411346037479,
        z: 0.17026090489033305,
      },
      field_of_view: 60,
    },
    components: {
      visibility: {
        view_setup_hints: {
          spaces_visible: true,
          space_boundaries_visible: true,
          openings_visible: true,
        },
        exceptions: [
          {
            ifc_guid: '2jtAXK$5fEaxKJ7bQSq47E',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2jtAXK$5fEaxKJ7bQSq44W',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhIo',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2IPIBRDqfB9g9ph1jK7w9t',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2IPIBRDqfB9g9ph1jK7xxP',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhiY',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhjR',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhjS',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3QAY3eV5196g1IKVoadWkR',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedarfmF',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1ijfb$q2rEj83AqgjF1DVK',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0s_',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '01QYdRhEHDj9J$QyL5KK8N',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhI$',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2IPIBRDqfB9g9ph1jK7wFy',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2a0TYIVqTDcOzDnwwHdokl',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2B$LZVn_r3Hh1zquRUoa5C',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhIX',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1ijfb$q2rEj83AqgjF1DVc',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhiZ',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0AY',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0Dy',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0Dz',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhjG',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0hJDCLuH1C$9xTd6yb37Be',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0sv',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu09Q',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0NK8abhtv6FvadH90aGiMG',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0NK8abhtv6FvadH90aJJtf',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedarejm',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0VJutlmP95uhxNJJBgXuKk',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedarg6g',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedarg63',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu094',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0NK8abhtv6FvadH90aJJtc',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0NK8abhtv6FvadH90aJJtY',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0NK8abhtv6FvadH90aJJtZ',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJF',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhIm',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhIn',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '12vbhSZ6jAmQEyoLLM8bnK',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedarfrc',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedarfrB',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedarflh',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedarfkM',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0yP',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0sy',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0sz',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0sY',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0sW',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu09M',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0NK8abhtv6FvadH90aJJsU',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhjr',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhjK',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhI_',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '12vbhSZ6jAmQEyoLLM8bno',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3JTH_odIX5ow61ityvm2Tl',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3JTH_odIX5ow61ityvm2J3',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2SHrNncGPDlhWqYy7Y0znj',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2SHrNncGPDlhWqYy7Y0zk2',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedarefw',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedarfPB',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedarfNL',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedarfM$',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1ijfb$q2rEj83AqgjF1Cno',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1ijfb$q2rEj83AqgjF1Cmo',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1ijfb$q2rEj83AqgjF1CmE',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1ijfb$q2rEj83AqgjF1Cfm',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1ijfb$q2rEj83AqgjF1DKk',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0yyjdWTKjDlPh79WDnZCSs',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2IPIBRDqfB9g9ph1jK7w2o',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0NK8abhtv6FvadH90aGiFn',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedarfu2',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedarfsy',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2jtAXK$5fEaxKJ7bQSq4Ta',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3rjsWrhjDAZ8bkmqsf5evN',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu09E',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1gWrWxW3D8uwKPY67wVUwu',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedarfLp',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedarfvz',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedarfno',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0DX',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedarfqF',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0AX',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0zg',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0yH',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0AZ',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhjn',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhjo',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhjp',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhjq',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhjU',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhjV',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhjA',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhih',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJc',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJO',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedarfmZ',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2IPIBRDqfB9g9ph1jK7wBQ',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu09J',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhir',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0rp',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0sb',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhif',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhig',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3pEwfecWrAOfSePHIuC$ru',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0Aq',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0A$',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '37dAoPprz58w$JMAIqkMZo',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu09B',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0NK8abhtv6FvadH90aJJte',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhim',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3AMHyXsnz5Nx89v9q51O08',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1ijfb$q2rEj83AqgjF1DLm',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0su',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0hJDCLuH1C$9xTd6yb37D5',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedarfjW',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2IPIBRDqfB9g9ph1jK7wTW',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0zk',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0st',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu09K',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0Ao',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0Ad',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0Aa',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhja',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1nqCzlPxLClOhZakPP5z2c',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhiX',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhKW',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJZ',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3kmq9hld9AffXB3F1Tnj6E',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2SHrNncGPDlhWqYy7Y0zfr',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1ijfb$q2rEj83AqgjF1DUS',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1ijfb$q2rEj83AqgjF1DEg',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1ijfb$q2rEj83AqgjF1DE0',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2IPIBRDqfB9g9ph1jK7wUY',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhj1',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhin',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhiW',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0za',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0zb',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhIg',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhIh',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhjZ',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhIe',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1ijfb$q2rEj83AqgjF1C_u',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu099',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhjT',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0P4SoAQOHEBO7ptC$wWNNh',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhj8',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhip',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedarfEg',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1ijfb$q2rEj83AqgjF1CrH',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2pdKOIaJ51e97SH_jcr8SU',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0rm',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0rn',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0NK8abhtv6FvadH90aJJtg',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0NK8abhtv6FvadH90aJJth',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '10GS1Z6KvAAeLfr139sZHU',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu09G',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0zf',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0zl',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0yQ',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhIZ',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1$qBHlk0L6z9bbBH_6jBbO',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0FSkBPOlv1shyA8uB_w1uf',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2IPIBRDqfB9g9ph1jK7w5R',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhIa',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhIb',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhIc',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhId',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhIO',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhIP',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhIQ',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2R4y1HupP3M8Nm1FSEEipb',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2R4y1HupP3M8Nm1FSEEizt',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3ovgPsllX5SfX9GZ$lW3O9',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2LMaWXjL98iwoW6PKVbuea',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1ijfb$q2rEj83AqgjF1D71',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '24eF171PPAhQC9zZC8x8fq',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0yJ',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppGX',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppGc',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppGd',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppGa',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppGb',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppGg',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppGh',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppGe',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppGf',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppGk',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppGl',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppGi',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppGj',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppHI',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppHJ',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppHG',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppHH',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppHM',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppHN',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppHK',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppHL',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppHQ',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppHR',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppHO',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppHP',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppHU',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppHV',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppHS',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppH3',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppMY',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppN8',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppNZ',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppNW',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppNX',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppNc',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppNd',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppNa',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppNb',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppNg',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppNh',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppNe',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppNf',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppKJ',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppKH',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppKM',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppKN',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppK_',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppK$',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppLe',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppLf',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppLk',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppRP',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppOR',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppOO',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppOP',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppOU',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppOC',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppUw',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppUY',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppUg',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppVI',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppVQ',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppV2',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0yR',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3EGPAJWlH4Rwr5IM3kTgyJ',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3EGPAJWlH4Rwr5IM3kTg_0',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '29XtfvuzH5shps13guGKk2',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '29XtfvuzH5shps13guGKg8',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0tMHhprcT7q9Fy4IFRvhX0',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '212pkhC$H2MBH2odAOmERw',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3IopWlvhn789Nd5whd4nVG',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3IopWlvhn789Nd5whd4nVE',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '195QVrKx105Ay9aaclyC5O',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '195QVrKx105Ay9aaclyC5G',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '37dAoPprz58w$JMAQqkMbB',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '37dAoPprz58w$JMAQqkMbJ',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '37dAoPprz58w$JMAQqkMY2',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '37dAoPprz58w$JMAQqkMYQ',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0zz',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0zh',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0ze',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0yL',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0yO',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0sd',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0AF',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0Am',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0NK8abhtv6FvadH90aJJtj',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhjw',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhie',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhKX',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJ$',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJm',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJn',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJo',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJp',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJf',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJg',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJX',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJV',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJ8',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJA',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJB',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJC',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJD',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJE',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhIp',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhIq',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhIj',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhIk',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhIl',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhIW',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '18fi7wwBr9DRbXZ7zqexWt',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedarea4',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedareZQ',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedarfz7',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedarfyx',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedarfy2',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedarfx$',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedarg8z',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedarg7n',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedarg7f',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJx',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJP',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJQ',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJR',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0zw',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0zx',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0zu',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0zv',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0z_',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0z$',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0zy',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0zY',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0zZ',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0zW',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0zX',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0zc',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0zd',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0zi',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0zj',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0yI',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0yG',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0yM',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0yN',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0r7',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0r4',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0rA',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0rB',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0r8',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0r9',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0rE',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0rF',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0rC',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0rD',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0ta',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0tg',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0te',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0tf',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0tk',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0tl',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0ti',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0tj',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0sJ',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0sG',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0sH',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0sM',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0sN',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0sK',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0sL',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0sQ',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0sR',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0sO',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0sP',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0sU',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0sV',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0sS',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0sT',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0s2',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0s0',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0s7',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0sA',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0sB',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0s9',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0sC',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0sD',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0so',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0sm',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0sn',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0sq',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0sr',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0sw',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0sx',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0sZ',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0sX',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0sc',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0sa',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0sg',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0se',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0si',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0sj',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu09I',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu09L',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu09P',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu09U',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu09V',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu09S',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu098',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu09C',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu09D',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu09o',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu09p',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0AQ',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0AR',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0AO',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0AP',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0AU',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0AV',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0AS',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0AT',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0A2',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0A0',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0A1',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0A6',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0A7',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0A4',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0A5',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0AA',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0AB',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0A8',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0A9',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0AE',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0AC',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0AD',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0Ap',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0An',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0As',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0At',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0Ar',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0Aw',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0Au',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0Av',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0A_',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0Az',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0Dx',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0Du',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0Dv',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0D_',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0D$',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0DY',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0DZ',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2tYnoUrgP2zOHyIJQnu0DW',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0NK8abhtv6FvadH90aGiJV',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0NK8abhtv6FvadH90aJJt$',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0NK8abhtv6FvadH90aJJty',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0NK8abhtv6FvadH90aJJtz',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0NK8abhtv6FvadH90aJJtw',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0NK8abhtv6FvadH90aJJtx',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0NK8abhtv6FvadH90aJJtu',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0NK8abhtv6FvadH90aJJtv',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0NK8abhtv6FvadH90aJJts',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0NK8abhtv6FvadH90aJJtt',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0NK8abhtv6FvadH90aJJtq',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0NK8abhtv6FvadH90aJJtr',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0NK8abhtv6FvadH90aJJto',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0NK8abhtv6FvadH90aJJtp',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0NK8abhtv6FvadH90aJJtm',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0NK8abhtv6FvadH90aJJtk',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0NK8abhtv6FvadH90aJJtl',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0NK8abhtv6FvadH90aJJti',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0NK8abhtv6FvadH90aJJtd',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0NK8abhtv6FvadH90aJJtW',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0NK8abhtv6FvadH90aJJtX',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0NK8abhtv6FvadH90aJJsV',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhkh',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhki',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhkj',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhkk',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhkl',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhkW',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhkX',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhkY',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhkZ',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhka',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhkb',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhkc',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhkd',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhkO',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhkP',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhkQ',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhkR',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhkS',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhkT',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhkU',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhkV',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhkG',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhkH',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhkI',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhkJ',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhkK',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhkL',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhkM',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhkN',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhk8',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhk9',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhkA',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhkB',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhkC',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhkD',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhkE',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhkF',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhk0',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhk1',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhk2',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhk3',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhk4',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhk5',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhk6',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhk7',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhju',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhjv',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhjs',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhjb',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhjc',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhjd',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhjO',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhjP',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhjQ',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhjI',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhjL',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhj9',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhjB',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhjD',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhjE',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhjF',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhj0',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhj2',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhiq',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhis',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhit',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhii',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhij',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhik',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhil',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhia',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhib',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhKg',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhKh',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhKi',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhKj',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhKk',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhKl',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhKE',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhK0',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhK1',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhK2',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhK3',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhK4',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhK5',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhK6',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhK7',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJu',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJv',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJw',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJy',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJz',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJ_',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJq',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJr',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJs',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJt',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJe',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJh',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJi',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJj',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJk',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJl',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJW',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJa',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJb',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJd',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJS',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJG',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJH',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJI',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJJ',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJK',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJL',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJM',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJN',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJ9',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJ1',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJ3',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJ4',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJ5',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJ6',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJ7',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhIu',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhIv',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhIw',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhIx',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhIy',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhIr',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhIs',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhIt',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhIi',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3p4I1YL1TFkOgPuPdzTmfc',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2dGnXJWbXBOQcEthSHBseS',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2dGnXJWbXBOQcEthSHBsl9',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2dGnXJWbXBOQcEthSHBsZ9',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0XpAC00GXEyxvEsgwOPa07',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0XpAC00GXEyxvEsgwOPa26',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0XpAC00GXEyxvEsgwOPaS5',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0tMHhprcT7q9Fy4I7RvheI',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0tMHhprcT7q9Fy4I7Rvhcz',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0tMHhprcT7q9Fy4I7RvhLr',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1YoRHfxUv6Ef3sPaDh4WlQ',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2qogGOJV97RA12SoxhC4_g',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2pfv5zURLF5R8wUT7zSZsB',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '12vbhSZ6jAmQEyoLLM8br2',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '12vbhSZ6jAmQEyoLLM8bsI',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '18fi7wwBr9DRbXZ7zqexzI',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0UBn6IYIr6beHwskmOJUFq',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3kmq9hld9AffXB3F1Tnj08',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3kmq9hld9AffXB3F1Tnj4R',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3kmq9hld9AffXB3F1TnjAQ',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2K4$ft7M94fOiruwuV0VYz',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2K4$ft7M94fOiruwuV0VYP',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3DFhggXhr5TOXrWdeQZ7lr',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3JTH_odIX5ow61ityvm2TC',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3JTH_odIX5ow61ityvm2Sx',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3JTH_odIX5ow61ityvm2H7',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2SHrNncGPDlhWqYy7Y0zhe',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2SHrNncGPDlhWqYy7Y0zeu',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2SHrNncGPDlhWqYy7Y0ze5',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2SHrNncGPDlhWqYy7Y0zaB',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '10GS1Z6KvAAeLfr139sZN9',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1xl6CZF4vFHewKyvOzRQnR',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1wzdq4hlvCghXQ$aavQjGo',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedareh9',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedaregM',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedareeE',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedareX2',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedareW2',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedarfBT',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedarfAT',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedarf9f',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedarf8v',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedarf7C',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedarf4m',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedarf42',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedarf0h',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedarf$U',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedarf_0',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedargz0',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedargxD',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1ijfb$q2rEj83AqgjF1C$M',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1ijfb$q2rEj83AqgjF1Cri',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1ijfb$q2rEj83AqgjF1Ctz',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1ijfb$q2rEj83AqgjF1CWm',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1ijfb$q2rEj83AqgjF1DOt',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1ijfb$q2rEj83AqgjF1DQo',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1ijfb$q2rEj83AqgjF1DTW',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1ijfb$q2rEj83AqgjF1DTD',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1ijfb$q2rEj83AqgjF1DIe',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1ijfb$q2rEj83AqgjF1DI2',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1ijfb$q2rEj83AqgjF1DMp',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1ijfb$q2rEj83AqgjF1DCs',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1ijfb$q2rEj83AqgjF1D23',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1ijfb$q2rEj83AqgjF1D4g',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2IPIBRDqfB9g9ph1jK7wRp',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2IPIBRDqfB9g9ph1jK7wPX',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2IPIBRDqfB9g9ph1jK7wVA',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0nci$w1HfAPwUZNWJZ$FZq',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0nci$w1HfAPwUZNWJZ$FYc',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2jtAXK$5fEaxKJ7bQSq4RT',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3kmq9hld9AffXB3F1Tnj7m',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1ijfb$q2rEj83AqgjF1D1V',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1ijfb$q2rEj83AqgjF1D3D',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '26huXf7AH5Shf3QJJDZhJT',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2AF5oEdX17JerknDwTDu4i',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0yyjdWTKjDlPh79WDnZCUF',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1VR4QviXv9zApvbcpr81Vt',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1VR4QviXv9zApvbcpr87cz',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '24eF171PPAhQC9zZC8x8f1',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '24eF171PPAhQC9zZC8x8fP',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '24eF171PPAhQC9zZC8x8fK',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '24eF171PPAhQC9zZC8x8cu',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '24eF171PPAhQC9zZC8x8dj',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '22aDHKi0n7CBvXVFNjVugP',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '22aDHKi0n7CBvXVFNjVul9',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '22aDHKi0n7CBvXVFNjVur1',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '22aDHKi0n7CBvXVFNjVurT',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '22aDHKi0n7CBvXVFNjVusX',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '22aDHKi0n7CBvXVFNjVuyY',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '22aDHKi0n7CBvXVFNjVuy4',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '22aDHKi0n7CBvXVFNjVuyJ',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '22aDHKi0n7CBvXVFNjVuyR',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '22aDHKi0n7CBvXVFNjVuzW',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '22aDHKi0n7CBvXVFNjVuze',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '22aDHKi0n7CBvXVFNjVuzm',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '22aDHKi0n7CBvXVFNjVuzu',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '22aDHKi0n7CBvXVFNjVuz0',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '22aDHKi0n7CBvXVFNjVuzI',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '22aDHKi0n7CBvXVFNjVu_W',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '22aDHKi0n7CBvXVFNjVtA0',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '24eF171PPAhQC9zZC8xBsJ',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '24eF171PPAhQC9zZC8xBmd',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '24eF171PPAhQC9zZC8xBiL',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '22aDHKi0n7CBvXVFNjVuCn',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '32EDQB0_f8WxNyStVJGhjP',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1VR4QviXv9zApvbcpr81Mx',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1VR4QviXv9zApvbcpr81H3',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1VR4QviXv9zApvbcpr86eq',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1VR4QviXv9zApvbcpr86ey',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1VR4QviXv9zApvbcpr86h4',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1VR4QviXv9zApvbcpr86hC',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1VR4QviXv9zApvbcpr86hV',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1VR4QviXv9zApvbcpr86hw',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '24eF171PPAhQC9zZC8x8Y4',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '24eF171PPAhQC9zZC8x8Ha',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '24eF171PPAhQC9zZC8x8Ev',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '24eF171PPAhQC9zZC8x8EB',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '24eF171PPAhQC9zZC8xBy1',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '24eF171PPAhQC9zZC8xBzS',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '24eF171PPAhQC9zZC8xBxx',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '24eF171PPAhQC9zZC8xBcq',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '24eF171PPAhQC9zZC8xBQQ',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '24eF171PPAhQC9zZC8xBLa',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '24eF171PPAhQC9zZC8xBAp',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '24eF171PPAhQC9zZC8xBBe',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '24eF171PPAhQC9zZC8xAw2',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '22aDHKi0n7CBvXVFNjVuPC',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '22aDHKi0n7CBvXVFNjVuTg',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '22aDHKi0n7CBvXVFNjVuTo',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '22aDHKi0n7CBvXVFNjVuTE',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '22aDHKi0n7CBvXVFNjVufH',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '22aDHKi0n7CBvXVFNjVtIy',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '22aDHKi0n7CBvXVFNjVtOq',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '22aDHKi0n7CBvXVFNjVtPi',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '22aDHKi0n7CBvXVFNjVtP8',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '08jfb1DCr9Lh6p6xVP6cLY',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '08jfb1DCr9Lh6p6xVP6cLk',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1VR4QviXv9zApvbcpr87dM',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0giGWt1fH7Rh7ulF2lrP50',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0gYDsDJJH888kg6Dlkb1ma',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0gYDsDJJH888kg6Dlkb1mw',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0gYDsDJJH888kg6Dlkb1_M',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0gYDsDJJH888kg6Dlkb1_H',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0gYDsDJJH888kg6Dlkb1_G',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0gYDsDJJH888kg6Dlkb1_J',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedargBB',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedargBA',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedargB9',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0gYDsDJJH888kg6Dlkb1_2',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0gYDsDJJH888kg6Dlkb1_T',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0gYDsDJJH888kg6Dlkb1_S',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPzze',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0gYDsDJJH888kg6Dlkb1sV',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0gYDsDJJH888kg6Dlkb1sO',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0gYDsDJJH888kg6Dlkb1sK',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0gYDsDJJH888kg6Dlkb1sH',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0gYDsDJJH888kg6Dlkb1sI',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0gYDsDJJH888kg6Dlkb1sl',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0gYDsDJJH888kg6Dlkb1se',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0gYDsDJJH888kg6Dlkb1sb',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0gYDsDJJH888kg6Dlkb1sX',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0gYDsDJJH888kg6Dlkb1sY',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0gYDsDJJH888kg6Dlkb1s$',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0gYDsDJJH888kg6Dlkb1su',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0gYDsDJJH888kg6Dlkb1sw',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0gYDsDJJH888kg6Dlkb1sq',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0gYDsDJJH888kg6Dlkb1oe',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0gYDsDJJH888kg6Dlkb1oh',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0gYDsDJJH888kg6Dlkb1og',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0gYDsDJJH888kg6Dlkb1ob',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0gYDsDJJH888kg6Dlkb1oa',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0gYDsDJJH888kg6Dlkb1od',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0gYDsDJJH888kg6Dlkb1oc',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0gYDsDJJH888kg6Dlkb1oX',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0gYDsDJJH888kg6Dlkb1oW',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0gYDsDJJH888kg6Dlkb1oZ',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0gYDsDJJH888kg6Dlkb1oY',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0gYDsDJJH888kg6Dlkb1oz',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0gYDsDJJH888kg6Dlkb1oy',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0gYDsDJJH888kg6Dlkb1o$',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0gYDsDJJH888kg6Dlkb1px',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0giGWt1fH7Rh7ulF2lrP6I',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPzoy',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPzpO',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPzmL',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPznU',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPz_I',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPz$S',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPzyL',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPzzF',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPzxL',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPzxg',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPzvv',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0gYDsDJJH888kg6Dlkb1o5',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPzcU',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPzbE',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPzXw',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPzem',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPzt_',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPw58',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPw5t',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPw5_',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPw5y',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPw5x',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPw5v',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPw5d',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPw5W',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPw5l',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPw5g',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPw5f',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPw2N',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPw2L',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPw2J',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPw2H',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPw2S',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPw2R',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPw26',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPwDM',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPwDN',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPwDL',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPwDI',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPwDJ',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPwDG',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPwDH',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPwDV',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPwDS',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPwDT',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPwDQ',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPwDR',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPwDO',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPwDP',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPwD6',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPwD7',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPwD4',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPwD5',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPwAX',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPw8a',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPw8b',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPw8Y',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPw8Z',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0giGWt1fH7Rh7ulF2lrP0c',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPzQy',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPzdD',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPzYn',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPzZ2',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPzkb',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPziK',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPzgV',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPzhu',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPzsO',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPzsl',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPzqv',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPwCR',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPwCP',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPwC7',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPwC5',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPwC3',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPwCC',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1yWkOgdiH5jw0bAD6BPwCB',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '18fi7wwBr9DRbXZ7zqexxe',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '18fi7wwBr9DRbXZ7zqexd3',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3TDe5HjzXD6BMhuxRiK9mP',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '18fi7wwBr9DRbXZ7zqexxj',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3TDe5HjzXD6BMhuxRiK9v5',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '18fi7wwBr9DRbXZ7zqexi1',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '18fi7wwBr9DRbXZ7zqexxX',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '18fi7wwBr9DRbXZ7zqexxW',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '18fi7wwBr9DRbXZ7zqexxR',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '18fi7wwBr9DRbXZ7zqexxQ',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3Ueb7hBrHCruONb2VB9qW6',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3Ueb7hBrHCruONb2VB9qW5',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0znQN7W9T5JwfP5KGfnVBm',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '18fi7wwBr9DRbXZ7zqexok',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '18fi7wwBr9DRbXZ7zqexnZ',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEXI',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEXH',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEXD',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEX8',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEX7',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEX2',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEX3',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEX0',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEc$',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEcw',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEcv',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEct',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEcq',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEcr',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEco',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEcp',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEcm',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEcn',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEck',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0znQN7W9T5JwfP5KGfnVDm',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEfB',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEke',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrElN',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEii',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEjN',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEZ_',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEZB',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEXt',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0znQN7W9T5JwfP5KGfnUsZ',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0znQN7W9T5JwfP5KGfnUte',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrErS',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrErR',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrErN',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrErI',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrErG',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrErE',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEho',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEhp',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEhm',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEhn',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEhk',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEhl',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEeb',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEeY',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0znQN7W9T5JwfP5KGfnV0A',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0znQN7W9T5JwfP5KGfnUnw',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0znQN7W9T5JwfP5KGfnUqR',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEg0',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEg1',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrE9T',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrE9K',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrE9I',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrE9J',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrE9H',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrE9C',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0znQN7W9T5JwfP5KGfnV4Y',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEai',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEQt',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrERw',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrERN',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEVr',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrETb',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrE9B',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrE97',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrE95',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrE93',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrE91',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEE_',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEFK',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEFI',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEFJ',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEFG',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEFE',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEFF',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0v$f2eHp9Dowdg3Z6SkQWT',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0v$f2eHp9Dowdg3Z6SkQWU',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0znQN7W9T5JwfP5KGfnUuV',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEP2',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEIP',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEFb',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEFY',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEEy',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEEz',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEEu',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEEs',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEEt',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEEq',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEEr',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEEp',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0znQN7W9T5JwfP5KGfnU$3',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEGD',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEHm',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEHG',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEMm',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrENi',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0ZcGxu2KH0d9uOBE7YrEN6',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '18fi7wwBr9DRbXZ7zqextn',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '18fi7wwBr9DRbXZ7zqextm',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '18fi7wwBr9DRbXZ7zqextt',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '18fi7wwBr9DRbXZ7zqexts',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '18fi7wwBr9DRbXZ7zqexx$',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '18fi7wwBr9DRbXZ7zqexxn',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '18fi7wwBr9DRbXZ7zqexxs',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '18fi7wwBr9DRbXZ7zqexxq',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1VV853Ry515vgV18wo2cpl',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '18fi7wwBr9DRbXZ7zqexgH',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '18fi7wwBr9DRbXZ7zqexku',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '18fi7wwBr9DRbXZ7zqexkB',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '18fi7wwBr9DRbXZ7zqexjq',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3TDe5HjzXD6BMhuxRiK9za',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3TDe5HjzXD6BMhuxRiK9ma',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3TDe5HjzXD6BMhuxRiK9mk',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3TDe5HjzXD6BMhuxRiK9qK',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3TDe5HjzXD6BMhuxRiK9qI',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '18fi7wwBr9DRbXZ7zqexww',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '18fi7wwBr9DRbXZ7zqexwv',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '18fi7wwBr9DRbXZ7zqexw_',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '18fi7wwBr9DRbXZ7zqexwz',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '18fi7wwBr9DRbXZ7zqex_0',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '18fi7wwBr9DRbXZ7zqex_7',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3TDe5HjzXD6BMhuxRiK9gY',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3TDe5HjzXD6BMhuxRiK9$a',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3TDe5HjzXD6BMhuxRiK9oV',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3TDe5HjzXD6BMhuxRiK9tv',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '18fi7wwBr9DRbXZ7zqexnF',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '18fi7wwBr9DRbXZ7zqexm7',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppGx',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppGu',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppGv',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppG_',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppG$',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppGy',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppGz',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppGY',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppGZ',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppGW',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppMT',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppNk',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppNl',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppNi',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppNj',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppKI',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppKG',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppKK',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppKL',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppR_',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppPe',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2obFQlqaj0KA3DDZV5ppUM',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '212pkhC$H2MBH2od2OmEDc',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '212pkhC$H2MBH2od2OmED8',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3p4I1YL1TFkOgPuPdzTmIc',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3p4I1YL1TFkOgPuPdzTmkg',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0r9wLGVBX8BA9iHcKgoNOz',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0r9wLGVBX8BA9iHcKgoNPG',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0r9wLGVBX8BA9iHcKgoNPz',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3g0gUfvzT2PgDxnLN7hahY',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3g0gUfvzT2PgDxnLN7hahD',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3g0gUfvzT2PgDxnLN7hage',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3g0gUfvzT2PgDxnLN7haet',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2dGnXJWbXBOQcEthSHBsgJ',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '04JGkg_vzFNgxf5FcGhYer',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3lH3olvnz6pQS1kfZehLQ3',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedargMQ',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '33BckiLlz2dfvsJqmrflOy',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '33BckiLlz2dfvsJqmrfka5',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '33BckiLlz2dfvsJqmrfkaI',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '33BckiLlz2dfvsJqmrfkaR',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '33BckiLlz2dfvsJqmrfkac',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '33BckiLlz2dfvsJqmrfkaj',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '33BckiLlz2dfvsJqmrfkZ4',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '33BckiLlz2dfvsJqmrfkZD',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '33BckiLlz2dfvsJqmrfkZK',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '33BckiLlz2dfvsJqmrfkZT',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '33BckiLlz2dfvsJqmrfkZc',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '33BckiLlz2dfvsJqmrfkZl',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1UkHNoWWjDaBk3SeTiLCJr',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0HSXp5OR1Dw9MrEgpx5hC5',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0HSXp5OR1Dw9MrEgpx5hC7',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0Pi98_2YT0DumCMBqLtiZE',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0Pi98_2YT0DumCMBqLtibX',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0Pi98_2YT0DumCMBqLticU',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1x4w8TKXf8s8gvqV0xqH1n',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1x4w8TKXf8s8gvqV0xqH1X',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1x4w8TKXf8s8gvqV0xqH3O',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1x4w8TKXf8s8gvqV0xqH1$',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1x4w8TKXf8s8gvqV0xqIjK',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1x4w8TKXf8s8gvqV0xqIY4',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1x4w8TKXf8s8gvqV0xqIgb',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1x4w8TKXf8s8gvqV0xqIez',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1ksZ7GQUfFMObFKjh1lbKQ',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1ksZ7GQUfFMObFKjh1lbEG',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1ksZ7GQUfFMObFKjh1lbNu',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1ksZ7GQUfFMObFKjh1lbKO',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2zsrMeNcDA5eRguL19uOvv',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2zsrMeNcDA5eRguL19uOur',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2zsrMeNcDA5eRguL19uOwt',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2zsrMeNcDA5eRguL19uOvx',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2AF5oEdX17JerknDwTD$gK',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2AF5oEdX17JerknDwTD$hK',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2AF5oEdX17JerknDwTDuM0',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2AF5oEdX17JerknDwTD$lP',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2AF5oEdX17JerknDwTD$gI',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2AF5oEdX17JerknDwTD$hI',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0r9wLGVBX8BA9iHcKgoNK$',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3g0gUfvzT2PgDxnLN7hacf',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3g0gUfvzT2PgDxnLN7hauW',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1eSaWfsrjEMPkUMBBSbctp',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1eSaWfsrjEMPkUMBBSbcsu',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1eSaWfsrjEMPkUMBBSbd7_',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1eSaWfsrjEMPkUMBBSbd0f',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3E5O9ieEH60Ozdwcw5SjxS',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3E5O9ieEH60Ozdwcw5SjxZ',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3E5O9ieEH60Ozdwcw5SjsW',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3E5O9ieEH60Ozdwcw5SjqG',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0tMHhprcT7q9Fy4I7RvhON',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3mpj8rbK1DTw$8ajgudS5N',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0GAfWguoj1d8uzpsQoNx0M',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2RBAul1en57v61sVTcf_6j',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2qBUUeJh12gOqR7_kuJ2Cv',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2qBUUeJh12gOqR7_kuJ2QX',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2qBUUeJh12gOqR7_kuJ2G0',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2qBUUeJh12gOqR7_kuJ25s',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2qBUUeJh12gOqR7_kuJ24v',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2qBUUeJh12gOqR7_kuJ246',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1m2ufNDzf3KOoalzYktIhO',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1m2ufNDzf3KOoalzYktIh6',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1m2ufNDzf3KOoalzYktIl$',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1m2ufNDzf3KOoalzYktIVT',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1m2ufNDzf3KOoalzYktIW4',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1m2ufNDzf3KOoalzYktIhc',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3IopWlvhn789Nd5wZd4nU2',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3IopWlvhn789Nd5wZd4nU0',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3IopWlvhn789Nd5wZd4nU4',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3IopWlvhn789Nd5wZd4nU8',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3IopWlvhn789Nd5wZd4nUE',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3IopWlvhn789Nd5wZd4nUC',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '195QVrKx105Ay9aaklyDvR',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1Ox1rPOI93RBRZxkE8NiAa',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1Ox1rPOI93RBRZxkE8NiAY',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1Ox1rPOI93RBRZxkE8NiLM',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1Ox1rPOI93RBRZxkE8NiE9',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1Ox1rPOI93RBRZxkE8NiF8',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '1Ox1rPOI93RBRZxkE8Ni9A',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0uG$_eu3z44fAMarIfzNv$',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0uG$_eu3z44fAMarIfzNvx',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0uG$_eu3z44fAMarIfzNvd',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0uG$_eu3z44fAMarIfzNvp',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0uG$_eu3z44fAMarIfzNvz',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '0uG$_eu3z44fAMarIfzNvv',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '2YMPb_UtL9zezh9FzsurLW',
            originating_system: 'xeokit.io',
          },
          {
            ifc_guid: '3oEZYghWf68QHeBedargH1',
            originating_system: 'xeokit.io',
          },
        ],
        default_visibility: false,
      },
      coloring: [
        {
          color: '00ffff',
          components: [
            {
              ifc_guid: '24eF171PPAhQC9zZC8x8fq',
              originating_system: 'xeokit.io',
            },
          ],
        },
        {
          color: 'ffffff',
          components: [
            {
              ifc_guid: '33BckiLlz2dfvsJqmrflOy',
              originating_system: 'xeokit.io',
            },
            {
              ifc_guid: '26huXf7AH5Shf3QJJDZhjD',
              originating_system: 'xeokit.io',
            },
            {
              ifc_guid: '26huXf7AH5Shf3QJJDZhIx',
              originating_system: 'xeokit.io',
            },
          ],
        },
        {
          color: 'b4b4b4',
          components: [
            {
              ifc_guid: '26huXf7AH5Shf3QJJDZhjB',
              originating_system: 'xeokit.io',
            },
          ],
        },
      ],
      selection: [],
    },
  },
  models: [
    // {
    //   id: 'xkt-model',
    //   src: './QD-01-S.xkt',
    //   metaModelSrc: './QD-01-S.json',
    //   // edges: true,
    //   performance: true,
    // },
    // {
    //   id: 'QD-01-S',
    //   src: './QD-01-S.ifc.xkt',
    //   // metaModelSrc: './QD-01-A.json',
    //   edges: true,
    //   performance: true,
    // },
    // {
    //   id: 'QD-02-S',
    //   src: './QD-02-S.ifc.xkt',
    //   // metaModelSrc: './QD-01-A.json',
    //   edges: true,
    //   performance: true,
    // },
    // {
    //   id: 'QD-03-S',
    //   src: './QD-03-S.ifc.xkt',
    //   // metaModelSrc: './QD-01-A.json',
    //   edges: true,
    //   performance: true,
    // },
    // {
    //   id: 'QD-03-A',
    //   src: './QD-03-A.ifc.xkt',
    //   // metaModelSrc: './QD-01-A.json',
    //   edges: true,
    //   performance: true,
    // },
    // {
    //   id: 'QD-03-MEP',
    //   src: './QD-03-MEP.ifc.xkt',
    //   // metaModelSrc: './QD-01-A.json',
    //   edges: true,
    //   performance: true,
    // },
    // {
    //   id: 'QD-02-S.ifc.xkt',
    //   src: './QD-02-S.ifc.xkt',
    //   // metaModelSrc: './QD-01-A.json',
    //   // edges: true,
    //   performance: true,
    // },
    {
      id: 'QD-02-A.ifc.xkt',
      src: './QD-02-A.ifc.xkt',
      // metaModelSrc: './QD-01-A.json',
      edges: true,
      performance: true,
    },
    // {
    //   id: 'QD-03-S.ifc.xkt',
    //   src: './QD-03-S.ifc.xkt',
    //   // metaModelSrc: './QD-01-A.json',
    //   // edges: true,
    //   performance: true,
    // },
    {
      id: 'QD-03-A.ifc.xkt',
      src: './QD-03-A.ifc.xkt',
      // metaModelSrc: './QD-01-A.json',
      edges: true,
      performance: true,
    },
    {
      id: 'QD-01-A-room.ifc.xkt',
      src: './QD-01-A-room.ifc.xkt',
      // metaModelSrc: './QD-01-A.json',
      edges: true,
      performance: true,
    },
    // {
    //   id: 'QD-01-A.ifc.xkt',
    //   src: './QD-01-A.ifc.xkt',
    //   // metaModelSrc: './QD-01-A.json',
    //   edges: true,
    //   performance: true,
    // },
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
  isDev: true,
};
