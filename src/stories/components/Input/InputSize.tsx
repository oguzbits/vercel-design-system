import React from 'react';
import { Input, Spacer } from '@geist-ui/core';

export const Size = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Input scale={0.5} placeholder="Scale 0.5" />
      <Input scale={0.8} placeholder="Scale 0.8" />
      <Input placeholder="Default (Scale 1.0)" />
      <Input scale={1.2} placeholder="Scale 1.2" />
      <Input scale={2} placeholder="Scale 2.0" />
    </div>
  );
};
Size.storyName = 'Scaling';
