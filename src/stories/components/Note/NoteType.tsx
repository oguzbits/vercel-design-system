import React from 'react';
import { Note } from '@geist-ui/core';

export const Type = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px', maxWidth: '600px' }}>
      <Note type="secondary">This is a secondary note.</Note>
      <Note type="success">This is a success note indicating a positive outcome.</Note>
      <Note type="warning">This is a warning note for potential issues.</Note>
      <Note type="error">This is an error note for critical problems.</Note>
    </div>
  );
};
Type.storyName = 'Status Colors';
