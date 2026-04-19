import React from 'react';
import { ButtonGroup, Button } from '@geist-ui/core';

export const Default = () => {
  return (
    <div style={{ padding: '20px' }}>
      <ButtonGroup>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      
      <div style={{ padding: '20px 0' }}>
        <ButtonGroup scale={0.5}>
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </div>
    </div>
  );
};
Default.displayName = 'Default';
