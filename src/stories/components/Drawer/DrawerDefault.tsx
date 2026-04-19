import React, { useState } from 'react';
import { Drawer, Button, Text } from '@geist-ui/core';

export const Default = () => {
  const [state, setState] = useState(false);
  
  return (
    <div style={{ padding: '40px' }}>
      <Button auto onClick={() => setState(true)}>Open Drawer</Button>
      <Drawer visible={state} onClose={() => setState(false)}>
        <Drawer.Title>Navigation Hub</Drawer.Title>
        <Drawer.Subtitle>Manage all your sub-pages from here.</Drawer.Subtitle>
        <Drawer.Content>
          <Text p>
            Drawers are ideal for secondary content that doesn't fit on the main screen but needs to be easily accessible without losing the current context.
          </Text>
          <Text p>
            They are commonly used for navigation menus, activity logs, or complex filters.
          </Text>
        </Drawer.Content>
      </Drawer>
    </div>
  );
};
Default.storyName = 'Default';
