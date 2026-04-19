import React from 'react';
import { Toggle } from '@geist-ui/core';

export const Default = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      <Toggle />
      <Toggle initialChecked />
    </div>
  );
};
Default.storyName = 'Default';
