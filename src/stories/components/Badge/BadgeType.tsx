import React from 'react';
import { Badge } from '@geist-ui/core';

export const Type = () => {
  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      <Badge type="default">Default</Badge>
      <Badge type="success">Success</Badge>
      <Badge type="warning">Warning</Badge>
      <Badge type="error">Error</Badge>
      <Badge type="secondary">Secondary</Badge>
    </div>
  );
};
Type.storyName = 'Status Colors';
