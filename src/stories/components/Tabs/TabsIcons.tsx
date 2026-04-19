import React from 'react';
import { Tabs, Text } from '@geist-ui/core';
import { Layout, Activity, Settings } from '@geist-ui/icons';

export const Icons = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Tabs initialValue="1">
        <Tabs.Item label={<><Layout size={16} /> Overview</>} value="1">
          <Text p>Layout and structure details.</Text>
        </Tabs.Item>
        <Tabs.Item label={<><Activity size={16} /> Activity</>} value="2">
          <Text p>Recent event stream.</Text>
        </Tabs.Item>
        <Tabs.Item label={<><Settings size={16} /> Config</>} value="3">
          <Text p>System level configuration.</Text>
        </Tabs.Item>
      </Tabs>
    </div>
  );
};
Icons.storyName = 'With Icons';
