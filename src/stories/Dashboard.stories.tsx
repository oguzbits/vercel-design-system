import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Card, CardContent, CardFooter } from '../components/ui/Card';
import { Text } from '../components/ui/Text';
import { Spacer } from '../components/ui/Spacer';
import { Button } from '../components/ui/Button';

const DashboardMockup = () => (
  <div style={{ padding: '24px', background: '#fafafa', minHeight: '100vh' }}>
    <Text h2>Project Dashboard</Text>
    <Text type="secondary">Overview of your current deployment status and metrics.</Text>
    <Spacer h={2} />
    
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
      <Card shadow>
        <CardContent>
          <Text h4>Production Deployment</Text>
          <Text p>Your latest build is live and serving traffic globally.</Text>
          <Text b type="success">Status: Healthy</Text>
        </CardContent>
        <CardFooter>
          <Button type="abort" auto scale={0.5}>View Logs</Button>
        </CardFooter>
      </Card>

      <Card shadow>
        <CardContent>
          <Text h4>Analytics Overview</Text>
          <Text p>Traffic has increased by 12% in the last 24 hours.</Text>
          <Text b font="1.2rem">1.2M Requests</Text>
        </CardContent>
        <CardFooter>
          <Text small secondary>Updated 5m ago</Text>
        </CardFooter>
      </Card>

      <Card shadow>
        <CardContent>
          <Text h4>Resource Usage</Text>
          <Text p>Memory and CPU usage remain within normal thresholds.</Text>
          <Text b type="warning">CPU: 78%</Text>
        </CardContent>
        <CardFooter>
          <Button type="secondary" auto scale={0.5}>Optimize</Button>
        </CardFooter>
      </Card>
    </div>
  </div>
);

const meta: Meta = {
  title: 'Examples/Dashboard',
  component: DashboardMockup,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
