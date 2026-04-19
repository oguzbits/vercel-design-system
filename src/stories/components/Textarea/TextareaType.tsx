import React from 'react';
import { Textarea } from '@geist-ui/core';

export const Type = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '500px' }}>
      <Textarea placeholder="Default" width="100%" />
      <Textarea type="success" placeholder="Success status" width="100%" />
      <Textarea type="warning" placeholder="Warning status" width="100%" />
      <Textarea type="error" placeholder="Error status" width="100%" />
    </div>
  );
};
Type.storyName = 'Status Colors';
