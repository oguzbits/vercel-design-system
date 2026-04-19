import { Meta } from '@storybook/react';
import { Collapse } from '@geist-ui/core';

export { Basic, Group } from './CollapseBasic';

export default {
  title: 'Surfaces/Collapse',
  component: Collapse,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Display a collapse with title and content.',
      },
    },
  },
} as Meta;
