import React from 'react';
import { Avatar, Spacer } from '@geist-ui/core';

export const Text = () => {
  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px', alignItems: 'center' }}>
      <Avatar text="ER" />
      <Avatar text="SD" />
      <Avatar text="RG" />
      <Spacer />
      <Avatar text="W" isSquare />
    </div>
  );
};
Text.storyName = 'Monograms';
