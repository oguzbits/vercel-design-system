import React from 'react';
import { Popover, Button, Text } from '@geist-ui/core';

export const Default = () => {
  const content = (
    <div style={{ padding: '0 10px' }}>
      <Text b>Custom Content</Text>
      <Text p small>This is an interactive popover with rich HTML or components inside.</Text>
    </div>
  );

  return (
    <div style={{ display: 'flex', gap: '40px', padding: '40px' }}>
      <Popover content={content}>
        <Button auto>Click Me</Button>
      </Popover>
      
      <Popover content={content} trigger="hover">
        <Button auto type="secondary">Hover Me</Button>
      </Popover>
    </div>
  );
};
Default.storyName = 'Default';
