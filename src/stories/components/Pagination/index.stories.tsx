import { Meta } from '@storybook/react';
import { Pagination } from '@geist-ui/core';

import PaginationDocumentation from './Pagination.mdx';

export { 
  Basic,
  Limit,
  Icon
} from './PaginationBasic';

const meta: Meta<typeof Pagination> = {
  title: 'Navigation/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: PaginationDocumentation,
    },
  },
  args: {},
};

export default meta;
