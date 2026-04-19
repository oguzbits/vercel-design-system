import React from 'react';
import { Note } from '@geist-ui/core';

export const Default = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px', maxWidth: '600px' }}>
      <Note>This is a default note for providing extra information.</Note>
      <Note label="HINT">You can customize the label of any note.</Note>
      <Note label={false}>A note without a label provides a cleaner look for simple highlights.</Note>
    </div>
  );
};
Default.storyName = 'Default';
