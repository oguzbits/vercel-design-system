import { Meta } from '@storybook/react';
import { Table } from '@geist-ui/core';

import TableDocumentation from './Table.mdx';

export { 
  Basic,
  Compose,
  Width,
  Actions,
  UpdateRow,
  CustomHead
} from './TableBasic';

const meta: Meta<typeof Table> = {
  title: 'Data Display/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: TableDocumentation,
    },
  },
  args: {},
};

export default meta;
