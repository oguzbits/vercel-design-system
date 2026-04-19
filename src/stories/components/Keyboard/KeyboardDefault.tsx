import React from 'react';
import { Keyboard, Spacer, Text } from '@geist-ui/core';

export const Default = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <Text p>Press <Keyboard>f</Keyboard> to search.</Text>
      <Spacer />
      <Text p>Force reload: <Keyboard command shift>R</Keyboard></Text>
      <Spacer />
      <Text p>Open terminal: <Keyboard ctrl>`</Keyboard></Text>
      <Spacer />
      <Text p>Advanced: <Keyboard command option shift>P</Keyboard></Text>
    </div>
  );
};
Default.storyName = 'Keyboard Shortcuts';
