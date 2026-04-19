import React from 'react';
import { ButtonGroup, Button } from '@geist-ui/core';

export const Vertical = () => {
  return (
    <div style={{ padding: '20px' }}>
      <ButtonGroup vertical>
        <Button>Option A</Button>
        <Button>Option B</Button>
        <Button>Option C</Button>
      </ButtonGroup>
    </div>
  );
};
Vertical.displayName = 'Vertical';
