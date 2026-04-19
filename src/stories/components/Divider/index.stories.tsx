import { Meta } from '@storybook/react';
import { Divider } from '@geist-ui/core';

export { Basic, Types, Alignment } from './DividerBasic';

export default {
  title: 'Others/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Divide content with a line.',
      },
    },
  },
} as Meta;
