import { Meta } from '@storybook/react';
import { Capacity } from '@geist-ui/core';

export { Basic, Colors } from './CapacityBasic';

export default {
  title: 'Data Display/Capacity',
  component: Capacity,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Display the capacity status of a resource.',
      },
    },
  },
} as Meta;
