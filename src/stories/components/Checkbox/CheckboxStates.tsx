import React from 'react';
import { Checkbox } from '@geist-ui/core';

export const States = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Checkbox disabled>Disabled unchecked</Checkbox>
      <Checkbox disabled checked>Disabled checked</Checkbox>
    </div>
  );
};
States.storyName = 'Interaction States';
