import { Meta } from '@storybook/react';
import { Toggle } from '@geist-ui/core';

export { Basic, Sizes, Types } from './ToggleBasic';

export default {
  title: 'Data Entry/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Display a switch for boolean input.',
      },
    },
  },
} as Meta;
