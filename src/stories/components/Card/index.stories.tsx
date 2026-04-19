import { Meta } from '@storybook/react';
import { Card } from '@geist-ui/core';

export { Basic, Hoverable } from './CardBasic';
export { Types } from './CardTypes';

export default {
  title: 'Surfaces/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Display a contained surface for related content and actions.',
      },
    },
  },
} as Meta;
