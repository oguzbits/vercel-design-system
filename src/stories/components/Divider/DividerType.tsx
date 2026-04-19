import React from 'react';
import { Divider, Text, Spacer } from '@geist-ui/core';

export const Type = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <Text small b>Secondary</Text>
      <Divider type="secondary" />
      <Spacer />
      <Text small b>Success</Text>
      <Divider type="success" />
      <Spacer />
      <Text small b>Warning</Text>
      <Divider type="warning" />
      <Spacer />
      <Text small b>Error</Text>
      <Divider type="error" />
    </div>
  );
};
Type.storyName = 'Status Colors';
