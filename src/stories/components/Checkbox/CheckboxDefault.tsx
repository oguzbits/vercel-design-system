import React from 'react';
import { Checkbox } from '@geist-ui/core';

export const Default = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      <Checkbox>Option A</Checkbox>
      <Checkbox initialChecked>Option B (Initial Checked)</Checkbox>
    </div>
  );
};
Default.storyName = 'Default';
