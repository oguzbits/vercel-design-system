import { Meta } from '@storybook/react';
import { Pagination } from '@geist-ui/core';

export { Basic, Sizes, Limit } from './PaginationBasic';

export default {
  title: 'Data Display/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Navigation across multiple pages.',
      },
    },
  },
} as Meta;
