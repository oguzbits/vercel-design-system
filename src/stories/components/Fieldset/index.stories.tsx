import { Meta } from '@storybook/react';
import { Fieldset } from '@geist-ui/core';

export { Basic, Group } from './FieldsetBasic';

export default {
  title: 'Surfaces/Fieldset',
  component: Fieldset,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Display a detailed configuration section with title and footer.',
      },
    },
  },
} as Meta;
