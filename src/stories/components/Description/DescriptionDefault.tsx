import React from 'react';
import { Description, Spacer } from '@geist-ui/core';

export const Default = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <Description title="Section Title" content="This is a description layout that pairs a small title with its relevant content." />
      <Spacer />
      <Description title="Deployment URL" content="https://vercel-design-system.vercel.app" />
    </div>
  );
};
Default.storyName = 'Default Layout';
