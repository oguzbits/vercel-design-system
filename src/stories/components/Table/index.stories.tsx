import { Meta } from '@storybook/react';
import { Table } from '@geist-ui/core';

export { Basic, CustomContent } from './TableBasic';

export default {
  title: 'Data Display/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Display structured data in a grid layout.',
      },
    },
  },
} as Meta;
