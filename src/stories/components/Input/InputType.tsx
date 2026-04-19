import React from 'react';
import { Input, Spacer } from '@geist-ui/core';

export const Type = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <Input placeholder="Default" />
      <Input type="secondary" placeholder="Secondary" />
      <Input type="success" placeholder="Success" />
      <Input type="warning" placeholder="Warning" />
      <Input type="error" placeholder="Error" />
    </div>
  );
};
Type.storyName = 'Status Colors';
