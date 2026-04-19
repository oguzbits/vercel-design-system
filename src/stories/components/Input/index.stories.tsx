import { Meta } from '@storybook/react';
import { Input } from '@geist-ui/core';

export { Basic, Labels } from './InputBasic';
export { Types, Sizes } from './InputAdvanced';

export default {
  title: 'Data Entry/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Retrieve text input from a user.',
      },
    },
  },
} as Meta;
