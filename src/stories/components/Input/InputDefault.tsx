import React from 'react';
import { Input } from '@geist-ui/core';

export const Default = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Input placeholder="Enter your username" />
      <Input label="Email" placeholder="name@example.com" />
      <Input labelRight=".com" placeholder="vercel" />
    </div>
  );
};
Default.storyName = 'Default';
