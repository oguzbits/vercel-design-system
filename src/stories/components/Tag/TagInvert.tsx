import React from 'react';
import { Tag } from '@geist-ui/core';

export const Invert = () => {
  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      <Tag invert type="default">Inverted Default</Tag>
      <Tag invert type="success">Inverted Success</Tag>
      <Tag invert type="warning">Inverted Warning</Tag>
      <Tag invert type="error">Inverted Error</Tag>
    </div>
  );
};
Invert.storyName = 'Inverted Style';
