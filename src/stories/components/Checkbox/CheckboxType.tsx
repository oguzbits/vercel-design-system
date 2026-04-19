import React from 'react';
import { Checkbox } from '@geist-ui/core';

export const Type = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Checkbox type="default" checked>Default</Checkbox>
      <Checkbox type="success" checked>Success</Checkbox>
      <Checkbox type="warning" checked>Warning</Checkbox>
      <Checkbox type="error" checked>Error</Checkbox>
      <Checkbox type="secondary" checked>Secondary</Checkbox>
    </div>
  );
};
Type.storyName = 'Status Colors';
