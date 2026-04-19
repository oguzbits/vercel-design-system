import React from 'react';
import { Loading, Spacer, Text } from '@geist-ui/core';

export const Type = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <Text small b>Secondary</Text>
      <Loading type="secondary" />
      <Spacer />
      <Text small b>Success</Text>
      <Loading type="success" />
      <Spacer />
      <Text small b>Warning</Text>
      <Loading type="warning" />
      <Spacer />
      <Text small b>Error</Text>
      <Loading type="error" />
    </div>
  );
};
Type.storyName = 'Status Colors';
