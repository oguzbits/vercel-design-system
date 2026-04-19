import { Meta } from '@storybook/react';
import { Dot } from '@geist-ui/core';

export { Basic, Labels } from './DotBasic';

export default {
  title: 'Data Display/Dot',
  component: Dot,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Display a dot to indicate status.',
      },
    },
  },
} as Meta;
