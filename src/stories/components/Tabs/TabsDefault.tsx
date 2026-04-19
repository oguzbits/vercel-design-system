import React from 'react';
import { Tabs, Text } from '@geist-ui/core';

export const Default = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Tabs initialValue="1">
        <Tabs.Item label="Overview" value="1">
          <Text p>This is the overview content.</Text>
        </Tabs.Item>
        <Tabs.Item label="Integrations" value="2">
          <Text p>Manage your connected services here.</Text>
        </Tabs.Item>
        <Tabs.Item label="Settings" value="3">
          <Text p>Adjust your project preferences.</Text>
        </Tabs.Item>
      </Tabs>
    </div>
  );
};
Default.storyName = 'Default';
