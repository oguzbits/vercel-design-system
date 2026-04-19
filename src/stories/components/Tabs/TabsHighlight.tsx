import React from 'react';
import { Tabs, Text } from '@geist-ui/core';

export const Highlight = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Tabs initialValue="v1" highlight>
        <Tabs.Item label="Deployments" value="v1">
          <Text p>List of recent production builds.</Text>
        </Tabs.Item>
        <Tabs.Item label="Analytics" value="v2">
          <Text p>Real-time traffic and performance metrics.</Text>
        </Tabs.Item>
        <Tabs.Item label="Logs" value="v3">
          <Text p>System and application runtime logs.</Text>
        </Tabs.Item>
      </Tabs>
    </div>
  );
};
Highlight.storyName = 'Highlight Effect';
