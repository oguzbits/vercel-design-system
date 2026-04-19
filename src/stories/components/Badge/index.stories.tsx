import { Meta } from '@storybook/react';
import { Badge } from '@geist-ui/core';

export { Basic, Anchor } from './BadgeBasic';

export default {
  title: 'Data Display/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Display a small numerical value or status descriptor.',
      },
    },
  },
} as Meta;
