import React from 'react';
import { Progress, Text } from '@geist-ui/core';

export const Type = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', padding: '20px', maxWidth: '400px' }}>
      <div>
        <Text small>Secondary</Text>
        <Progress type="secondary" value={45} />
      </div>
      <div>
        <Text small>Success</Text>
        <Progress type="success" value={45} />
      </div>
      <div>
        <Text small>Warning</Text>
        <Progress type="warning" value={45} />
      </div>
      <div>
        <Text small>Error</Text>
        <Progress type="error" value={45} />
      </div>
    </div>
  );
};
Type.storyName = 'Status Colors';
