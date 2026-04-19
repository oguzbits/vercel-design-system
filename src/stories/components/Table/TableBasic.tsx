import React from 'react';
import { Table, Grid, Text, Tag } from '@geist-ui/core';

export const Basic = () => {
  const data = [
    { property: 'type', description: 'type of button', type: 'secondary', default: '-' },
    { property: 'ghost', description: 'the ghost effect', type: 'boolean', default: 'false' },
    { property: 'loading', description: 'display a loading spinner', type: 'boolean', default: 'false' },
  ];
  return (
    <Table data={data}>
      <Table.Column prop="property" label="Property" />
      <Table.Column prop="description" label="Description" />
      <Table.Column prop="type" label="Type" />
      <Table.Column prop="default" label="Default" />
    </Table>
  );
};

export const CustomContent = () => {
  const data = [
    { name: 'John Doe', role: 'Admin', status: 'Active' },
    { name: 'Jane Smith', role: 'Editor', status: 'Inactive' },
  ];
  
  const renderStatus = (value: string) => {
    const type = value === 'Active' ? 'success' : 'secondary';
    return <Tag type={type} invert>{value}</Tag>;
  };

  return (
    <Table data={data}>
      <Table.Column prop="name" label="Name" />
      <Table.Column prop="role" label="Role" />
      <Table.Column prop="status" label="Status" render={renderStatus} />
    </Table>
  );
};
