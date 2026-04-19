import React from 'react';
import { Slider } from '@geist-ui/core';

export const Default = () => {
  return (
    <div style={{ maxWidth: '400px', padding: '20px' }}>
      <Slider initialValue={20} />
    </div>
  );
};
Default.storyName = 'Default';
