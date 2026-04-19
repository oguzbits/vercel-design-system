import React from 'react';
import { Spinner } from '@geist-ui/core';

export const Default = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '40px' }}>
      <Spinner />
    </div>
  );
};
Default.storyName = 'Default';
