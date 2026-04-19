import React from 'react';
import { Textarea } from '@geist-ui/core';

export const Default = () => {
  return (
    <div style={{ maxWidth: '500px' }}>
      <Textarea placeholder="Please enter your description..." width="100%" />
    </div>
  );
};
Default.storyName = 'Default';
