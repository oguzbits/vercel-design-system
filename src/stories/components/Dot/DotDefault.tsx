import React from 'react';
import { Dot, Spacer } from '@geist-ui/core';

export const Default = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Dot type="success">Ready</Dot>
      <Spacer />
      <Dot type="warning">Warning</Dot>
      <Spacer />
      <Dot type="error">Error</Dot>
      <Spacer />
      <Dot type="secondary">Secondary</Dot>
      <Spacer />
      <Dot>Default</Dot>
    </div>
  );
};
Default.storyName = 'Default Status';
