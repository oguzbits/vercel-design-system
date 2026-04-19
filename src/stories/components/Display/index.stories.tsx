import { Meta } from '@storybook/react';
import { Display } from '@geist-ui/core';

export { Basic, CustomCaption } from './DisplayBasic';

export default {
  title: 'Data Display/Display',
  component: Display,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Centered content with a caption.',
      },
    },
  },
} as Meta;
