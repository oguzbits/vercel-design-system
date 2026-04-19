import React from 'react';
import { ButtonGroup, Button, Spacer } from '@geist-ui/core';

export const Type = () => {
  return (
    <div style={{ padding: '20px' }}>
      <ButtonGroup type="success">
        <Button>Accept</Button>
        <Button>Review</Button>
      </ButtonGroup>
      
      <Spacer />
      
      <ButtonGroup type="error" ghost>
        <Button>Delete</Button>
        <Button>Purge</Button>
      </ButtonGroup>

       <Spacer />
      
      <ButtonGroup type="secondary">
        <Button>Save</Button>
        <Button>Publish</Button>
      </ButtonGroup>
    </div>
  );
};
Type.displayName = 'Type';
