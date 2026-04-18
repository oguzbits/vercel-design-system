import React from 'react';
import { Table } from '@geist-ui/core';

const dataSource = [
  { id: '1', property: 'Project Alpha', type: 'Production', version: '2.4.1' },
  { id: '2', property: 'Beta Dashboard', type: 'Preview', version: '1.0.0-rc' },
];

export const Default = () => (
  <Table data={dataSource}>
    <Table.Column prop="property" label="PROJECT" render={(v) => v} />
    <Table.Column prop="type" label="TYPE" render={(v) => v} />
    <Table.Column prop="version" label="VERSION" render={(v) => v} />
  </Table>
);
