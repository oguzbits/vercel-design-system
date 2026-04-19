import React from 'react';
import { Note } from '@geist-ui/core';

export const Filled = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px', maxWidth: '600px' }}>
      <Note filled type="success">This is a filled success note.</Note>
      <Note filled type="warning">This is a filled warning note.</Note>
      <Note filled type="error">This is a filled error note.</Note>
      <Note filled type="secondary">This is a filled secondary note.</Note>
    </div>
  );
};
Filled.storyName = 'Filled Style';
