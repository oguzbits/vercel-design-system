import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Table, TableColumn } from './Table';
import { Badge } from '@geist-ui/core';

const meta: Meta<typeof Table> = {
  title: 'Components/Surfaces/Table',
  component: Table,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Table>;

const dataSource = [
  { 
    property: 'type', 
    description: 'Components type', 
    type: <Badge type="secondary">secondary</Badge>, 
    default: '-' 
  },
  { 
    property: 'disabled', 
    description: 'Disable component', 
    type: <Badge type="warning">boolean</Badge>, 
    default: 'false' 
  },
  { 
    property: 'width', 
    description: 'Table width', 
    type: <Badge type="success">string</Badge>, 
    default: 'auto' 
  },
];

export const Default: Story = {
  render: () => (
    <Table data={dataSource}>
      <TableColumn prop="property" label="Property" />
      <TableColumn prop="description" label="Description" />
      <TableColumn prop="type" label="Type" />
      <TableColumn prop="default" label="Default" />
    </Table>
  ),
};
