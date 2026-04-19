import { Meta } from '@storybook/react';
import { Popover } from '@geist-ui/core';

export { Basic, Menu } from './PopoverBasic';

export default {
  title: 'Feedback/Popover',
  component: Popover,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Floating content revealed by clicking or hovering on an element.',
      },
    },
  },
} as Meta;
