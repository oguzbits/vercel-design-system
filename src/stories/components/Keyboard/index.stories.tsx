import { Meta } from '@storybook/react';
import { Keyboard } from '@geist-ui/core';

export { Basic, Combination } from './KeyboardBasic';

export default {
  title: 'Data Display/Keyboard',
  component: Keyboard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Display keyboard shortcuts.',
      },
    },
  },
} as Meta;
