import React from 'react';
import { Toggle } from '@geist-ui/core';

export const Type = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Toggle type="default" checked />
      <Toggle type="success" checked />
      <Toggle type="warning" checked />
      <Toggle type="error" checked />
      <Toggle type="secondary" checked />
    </div>
  );
};
Type.storyName = 'Status Colors';
