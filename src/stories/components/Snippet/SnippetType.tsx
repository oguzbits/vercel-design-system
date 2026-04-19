import React from 'react';
import { Snippet, Spacer } from '@geist-ui/core';

export const Type = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <Snippet type="success" text="npm install @geist-ui/core" width="300px" />
      <Spacer />
      <Snippet type="warning" text="npm install @geist-ui/core" width="300px" />
      <Spacer />
      <Snippet type="error" text="npm install @geist-ui/core" width="300px" />
      <Spacer />
      <Snippet type="secondary" text="npm install @geist-ui/core" width="300px" />
      <Spacer />
      <Snippet filled type="success" text="npm install @geist-ui/core" width="300px" />
    </div>
  );
};
Type.storyName = 'Status Colors';
