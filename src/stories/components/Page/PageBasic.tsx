import React from 'react';
import { Page, Text, Table, Grid } from '@geist-ui/core';

export const Basic = () => (
  <Page>
    <Page.Header>
      <Text h2>Project Settings</Text>
    </Page.Header>
    <Page.Content>
      <Text p>Manage your project's general settings here.</Text>
      <Table data={[{ key: 'Name', value: 'vercel-design-system' }, { key: 'Branch', value: 'main' }]}>
        <Table.Column prop="key" label="Property" />
        <Table.Column prop="value" label="Value" />
      </Table>
    </Page.Content>
    <Page.Footer>
      <Text small>Created with Geist UI</Text>
    </Page.Footer>
  </Page>
);
