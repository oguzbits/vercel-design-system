import { Meta } from '@storybook/react';
import { Drawer } from '@geist-ui/core';

export { Basic, Placement } from './DrawerBasic';

export default {
  title: 'Feedback/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Display a panel that slides out from the edge of the screen.',
      },
    },
  },
} as Meta;
