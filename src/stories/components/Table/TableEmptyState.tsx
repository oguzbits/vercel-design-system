import React from 'react';
import { Table, Text } from '@geist-ui/core';

export const EmptyState = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4 style={{ marginBottom: '16px' }}>Default Empty State</h4>
        <Table data={[]} emptyText="No deployments found for this project.">
          <Table.Column prop="name" label="Name" render={(v) => v} />
          <Table.Column prop="status" label="Status" render={(v) => v} />
        </Table>
      </div>
    </div>
  );
};

EmptyState.parameters = {
  docs: {
    description: {
      story: 'When no data is available, the table should provide clear contextual feedback or an empty state message.',
    },
  },
};
