import { Meta } from '@storybook/react';
import { Tree } from '@geist-ui/core';

export { Basic, Icons } from './TreeBasic';

export default {
  title: 'Data Display/Tree',
  component: Tree,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Display a hierarchical file structure.',
      },
    },
  },
} as Meta;
