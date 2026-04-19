import { Meta } from '@storybook/react';
import { Tabs } from '@geist-ui/core';

export { Basic, Highlight } from './TabsBasic';

export default {
  title: 'Navigation/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Display tabbed content.',
      },
    },
  },
} as Meta;
