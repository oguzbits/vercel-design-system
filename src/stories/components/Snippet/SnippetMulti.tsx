import React from 'react';
import { Snippet } from '@geist-ui/core';

export const Multi = () => {
  const lines = [
    'cd my-project',
    'npm install',
    'npm run dev',
  ];
  
  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <Snippet text={lines} width="300px" />
    </div>
  );
};
Multi.storyName = 'Multi-line';
