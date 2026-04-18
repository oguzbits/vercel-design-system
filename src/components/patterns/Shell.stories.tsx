import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Shell } from './Shell';
import { Card, Text, Badge, Tabs, Spacer, Note } from '@geist-ui/core';
import { Table, TableColumn } from '../ui/Table';

const meta: Meta<typeof Shell> = {
  title: 'Patterns/Application Layout',
  component: Shell,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A standardized application shell used for dashboard and project views. It provides a consistent header with breadcrumbs and user actions.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Shell>;

// Pre-rendering badges for data-first approach (resolves Table.Column render issues)
const tableData = [
  { 
    id: '1', 
    name: 'main', 
    status: <Badge type="success">ready</Badge>, 
    updated: '2m ago' 
  },
  { 
    id: '2', 
    name: 'feat/new-ui', 
    status: <Badge type="warning">building</Badge>, 
    updated: '15m ago' 
  },
  { 
    id: '3', 
    name: 'fix/security', 
    status: <Badge type="error">error</Badge>, 
    updated: '1h ago' 
  },
];

export const FullDashboard: Story = {
  args: {
    username: 'oguzbits',
    projectName: 'vercel-design-system',
  },
  render: (args) => (
    <Shell {...args}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <Text h2 style={{ marginBottom: 0 }}>Project Overview</Text>
          <Text type="secondary">Manage your deployments and production environments.</Text>
        </div>
        <button 
          style={{ 
            background: 'var(--geist-foreground)', 
            color: 'var(--geist-background)', 
            border: 'none', 
            padding: '10px 20px', 
            borderRadius: '5px', 
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          New Deployment
        </button>
      </div>

      <Tabs initialValue="1">
        <Tabs.Item label="Deployments" value="1">
          <Spacer h={1} />
          <Table data={tableData}>
            <TableColumn prop="name" label="Branch" />
            <TableColumn prop="status" label="Status" />
            <TableColumn prop="updated" label="Last Update" />
          </Table>
        </Tabs.Item>
        <Tabs.Item label="Infrastructure" value="2">
          <Spacer h={2} />
          <Note label="Pro Tip" type="secondary">
            Your serverless functions are currently distributed across 3 regions.
          </Note>
          <Spacer h={1} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
             <Card>
               <Text h5>US-East</Text>
               <Text small type="secondary">Healthy</Text>
             </Card>
             <Card>
               <Text h5>EU-Central</Text>
               <Text small type="secondary">Healthy</Text>
             </Card>
             <Card>
               <Text h5>APAC-South</Text>
               <Text small type="secondary">Healthy</Text>
             </Card>
          </div>
        </Tabs.Item>
        <Tabs.Item label="Settings" value="3">
          <Spacer h={2} />
          <Card shadow width="100%">
            <Text h4>Danger Zone</Text>
            <Text type="secondary">Once you delete a project, there is no going back. Please be certain.</Text>
            <Spacer h={1} />
            <div style={{ display: 'flex', gap: '1rem' }}>
               <button 
                style={{ 
                  background: 'transparent', 
                  color: 'var(--geist-error)', 
                  border: '1px solid var(--geist-error)', 
                  padding: '8px 16px', 
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                Delete Project
              </button>
            </div>
          </Card>
        </Tabs.Item>
      </Tabs>
    </Shell>
  ),
};
