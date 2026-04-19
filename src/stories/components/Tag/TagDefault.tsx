import React from 'react';
import { Tag } from '@geist-ui/core';

export const Default = () => {
  return (
    <div style={{ display: 'flex', gap: '15px', padding: '20px' }}>
      <Tag>Vercel</Tag>
      <Tag>React</Tag>
      <Tag>Design System</Tag>
    </div>
  );
};
Default.storyName = 'Default';
