import { Meta } from '@storybook/react';
import { Progress } from '@geist-ui/core';

export { Basic, Colors } from './ProgressBasic';

export default {
  title: 'Data Display/Progress',
  component: Progress,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Display a progress bar.',
      },
    },
  },
} as Meta;
