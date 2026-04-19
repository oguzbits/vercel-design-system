import { Meta } from '@storybook/react';
import { Textarea } from '@geist-ui/core';

export { Basic, Types, Resize } from './TextareaBasic';

export default {
  title: 'Data Entry/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Display a multi-line text input.',
      },
    },
  },
} as Meta;
