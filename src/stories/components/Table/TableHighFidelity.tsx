import React from 'react';
import { Table, User, Badge, Button } from '@geist-ui/core';
import * as Icons from '@geist-ui/icons';

const dataSource = [
  { id: '1', property: 'Project Alpha', type: 'Production', version: '2.4.1', status: 'ready', modified: '2m ago', author: 'Lee Robinson' },
  { id: '2', property: 'Beta Dashboard', type: 'Preview', version: '1.0.0-rc', status: 'error', modified: '5h ago', author: 'Steven Tey' },
  { id: '3', property: 'Internal API', type: 'Production', version: '5.2.0', status: 'ready', modified: '1d ago', author: 'Guillermo Rauch' },
];

export const HighFidelity = () => (
  <Table data={dataSource}>
    <Table.Column prop="property" label="NAME" render={(val) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600 }}>
        <Icons.Folder size={16} />
        {val as string}
      </div>
    )} />
    <Table.Column prop="author" label="AUTHOR" render={(val) => (
      <User src="https://github.com/vercel.png" name={val as string} scale={0.8} />
    )} />
    <Table.Column prop="status" label="STATUS" render={(val) => {
      const types: any = { ready: 'success', error: 'error' };
      return <Badge type={types[val as string] || 'default'}>{val as string}</Badge>;
    }} />
    <Table.Column prop="id" label="ACTIONS" render={() => (
      <Button icon={<Icons.MoreVertical />} auto scale={2/3} px={0.6} />
    )} />
  </Table>
);

HighFidelity.parameters = {
  docs: {
    description: {
      story: 'The High Fidelity example demonstrates how to use the `render` prop to embed complex components like Users, Badges, and Action Menus inside table cells.',
    },
  },
};
