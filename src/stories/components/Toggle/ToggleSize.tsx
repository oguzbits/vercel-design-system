import React from 'react';
import { Toggle } from '@geist-ui/core';

export const Size = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Toggle scale={0.5} checked />
      <Toggle scale={0.8} checked />
      <Toggle checked />
      <Toggle scale={1.2} checked />
      <Toggle scale={2} checked />
    </div>
  );
};
Size.storyName = 'Scaling';
