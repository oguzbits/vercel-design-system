import { Meta } from '@storybook/react';
import { Tooltip } from '@geist-ui/core';

export { Basic, Placement } from './TooltipBasic';

export default {
  title: 'Feedback/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Display a short message on hover.',
      },
    },
  },
} as Meta;
