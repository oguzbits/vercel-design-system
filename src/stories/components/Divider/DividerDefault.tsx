import React from 'react';
import { Divider, Text } from '@geist-ui/core';

export const Default = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <Text p>The first section of content describes the primary goal.</Text>
      <Divider />
      <Text p>The second section follows a clean line of separation.</Text>
      <Divider>OR</Divider>
      <Text p>Dividers can also contain text to separate choices or secondary paths.</Text>
      <Divider align="start">Start Aligned</Divider>
      <Divider align="end">End Aligned</Divider>
    </div>
  );
};
Default.storyName = 'Default';
