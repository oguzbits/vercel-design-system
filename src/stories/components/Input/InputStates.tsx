import React from 'react';
import { Input } from '@geist-ui/core';

export const States = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Input disabled placeholder="Disabled state" />
      <Input readOnly initialValue="Read Only content" />
      <Input clearable initialValue="I am clearable" placeholder="Clearable" />
      <Input type="success" clearable initialValue="Valid and clearable" />
    </div>
  );
};
States.storyName = 'Interaction States';
