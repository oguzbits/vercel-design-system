import React from 'react';
import { Tag } from '@geist-ui/core';

export const Type = () => {
  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      <Tag type="default">Default</Tag>
      <Tag type="success">Success</Tag>
      <Tag type="warning">Warning</Tag>
      <Tag type="error">Error</Tag>
      <Tag type="secondary">Secondary</Tag>
    </div>
  );
};
Type.storyName = 'Status Colors';
