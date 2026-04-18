import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from '../../../components/ui/Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs initialValue="1">
      <Tabs.Item label="Deployment" value="1">
        This is the deployment information.
      </Tabs.Item>
      <Tabs.Item label="Logs" value="2">
        Real-time streaming logs.
      </Tabs.Item>
      <Tabs.Item label="Settings" value="3">
        Configure your application settings.
      </Tabs.Item>
    </Tabs>
  ),
};
