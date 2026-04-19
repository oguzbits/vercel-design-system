import React from 'react';
import { Tooltip, Button, Spacer } from '@geist-ui/core';

export const Type = () => {
  return (
    <div style={{ display: 'flex', gap: '20px', padding: '40px' }}>
      <Tooltip text="Default context info" type="default">
        <Button auto>Default</Button>
      </Tooltip>
      
      <Tooltip text="Operation successful" type="success">
        <Button auto type="success-light">Success</Button>
      </Tooltip>
      
      <Tooltip text="Warning: limited quota" type="warning">
        <Button auto type="warning-light">Warning</Button>
      </Tooltip>
      
      <Tooltip text="Error: action failed" type="error">
        <Button auto type="error-light">Error</Button>
      </Tooltip>
      
      <Tooltip text="Dark themed background" type="dark">
        <Button auto type="secondary">Dark</Button>
      </Tooltip>
    </div>
  );
};
Type.storyName = 'Status Colors';
