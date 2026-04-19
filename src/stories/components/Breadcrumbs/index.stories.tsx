import { Meta } from '@storybook/react';
import { Breadcrumbs } from '@geist-ui/core';

export { Basic, Separator } from './BreadcrumbsBasic';

export default {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Indicate the path for current terminal page.',
      },
    },
  },
} as Meta;
