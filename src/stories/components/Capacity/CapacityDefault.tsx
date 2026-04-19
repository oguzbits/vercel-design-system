import React from 'react';
import { Capacity, Spacer, Text } from '@geist-ui/core';

export const Default = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <Text small b>Storage Usage (45%)</Text>
      <Capacity value={45} />
      <Spacer />
      <Text small b>CPU Load (15%)</Text>
      <Capacity value={15} />
      <Spacer />
      <Text small b>Full Capacity (100%)</Text>
      <Capacity value={100} />
    </div>
  );
};
Default.storyName = 'Default';
