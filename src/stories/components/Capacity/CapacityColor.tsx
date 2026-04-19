import React from 'react';
import { Capacity, Spacer, Text } from '@geist-ui/core';

export const Color = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <Text small b>Custom Cyan</Text>
      <Capacity value={60} color="#0070f3" />
      <Spacer />
      <Text small b>Custom Warning Hex</Text>
      <Capacity value={85} color="#f5a623" />
      <Spacer />
      <Text small b>Custom Error Hex</Text>
      <Capacity value={95} color="#ee0000" />
    </div>
  );
};
Color.storyName = 'Custom Colors';
