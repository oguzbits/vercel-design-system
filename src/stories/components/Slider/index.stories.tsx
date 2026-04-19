import { Meta } from '@storybook/react';
import { Slider } from '@geist-ui/core';

export { Basic, Step, Disabled } from './SliderBasic';

export default {
  title: 'Data Entry/Slider',
  component: Slider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Slider for selecting values from a range.',
      },
    },
  },
} as Meta;
