import React from 'react';
import { Radio } from '@geist-ui/core';

export const Default = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      <Radio checked={false}>Unchecked</Radio>
      <Radio checked={true}>Checked</Radio>
    </div>
  );
};
Default.storyName = 'Default';
