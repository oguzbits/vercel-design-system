import { Meta } from '@storybook/react';
import { Select } from '@geist-ui/core';

export { Basic, Types } from './SelectBasic';

export default {
  title: 'Data Entry/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Display a dropdown list for choosing options.',
      },
    },
  },
} as Meta;
