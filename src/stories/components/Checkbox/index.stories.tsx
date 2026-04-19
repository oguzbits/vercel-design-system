import { Meta } from '@storybook/react';
import { Checkbox } from '@geist-ui/core';

export { Basic, Group, Types } from './CheckboxBasic';

export default {
  title: 'Data Entry/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Capture boolean input or select multiple options from a group.',
      },
    },
  },
} as Meta;
