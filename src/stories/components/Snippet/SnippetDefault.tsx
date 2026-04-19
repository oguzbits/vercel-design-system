import React from 'react';
import { Snippet, Spacer } from '@geist-ui/core';

export const Default = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <Snippet text="npm install @geist-ui/core" width="300px" />
      <Spacer />
      <Snippet symbol="$" text="bun create vite@latest" width="300px" />
    </div>
  );
};
Default.storyName = 'Default';
