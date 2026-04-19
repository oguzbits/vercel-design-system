import React from 'react';
import { Progress, Spacer, Text } from '@geist-ui/core';

export const Default = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px', maxWidth: '400px' }}>
      <div>
        <Text small b>20% Complete</Text>
        <Progress value={20} />
      </div>
      <div>
        <Text small b>Success state at 100%</Text>
        <Progress value={100} />
      </div>
    </div>
  );
};
Default.storyName = 'Default';
