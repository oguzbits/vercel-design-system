import React from 'react';
import { Badge, Text } from '@geist-ui/core';

export const Default = () => {
  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      <Badge>1</Badge>
      <Badge>New</Badge>
      <Badge>Beta</Badge>
      <Badge>100+</Badge>
    </div>
  );
};
Default.storyName = 'Default';
