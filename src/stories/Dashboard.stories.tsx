import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Card, CardContent, CardFooter } from '../components/ui/Card';
import { Text } from '../components/ui/Text';
import { Spacer } from '../components/ui/Spacer';
import { Button } from '../components/ui/Button';

import { Snippet } from '../components/ui/Snippet';
import { Note } from '../components/ui/Note';

import { Avatar } from '../components/ui/Display';

const DashboardMockup = () => (
  <div style={{ padding: '24px', background: '#fafafa', minHeight: '100vh', maxWidth: '1200px', margin: '0 auto' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Avatar src="https://github.com/vercel.png" scale={2} />
        <div>
          <Text h2 style={{ margin: 0 }}>Project Dashboard</Text>
          <Text type="secondary" style={{ margin: 0 }}>Overview of your current deployment status and metrics.</Text>
        </div>
      </div>
      <Snippet text="bun run deploy" type="dark" width="200px" />
    </div>
    
    <Spacer h={2} />
    
    <Note type="warning" label="Alert" filled>Your domain is expiring in 3 days. Please renew to avoid service interruption.</Note>
    
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

    <Spacer h={3} />
    <Text h3>Quick Configuration</Text>
    <Card>
      <CardContent>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-end' }}>
          <Input label="Environment Variable" placeholder="API_KEY" />
          <Input label="Value" placeholder="••••••••••••••••" />
          <Button type="success" auto>Add Key</Button>
        </div>
      </CardContent>
    </Card>
  </div>
);

const meta: Meta = {
  title: 'Examples/Dashboard',
  component: DashboardMockup,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
