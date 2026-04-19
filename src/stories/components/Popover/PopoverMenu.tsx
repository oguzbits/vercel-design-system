import React from 'react';
import { Popover, Button, Spacer, Text } from '@geist-ui/core';

export const Item = () => {
  const content = () => (
    <>
      <Popover.Item title>
        <span>User Settings</span>
      </Popover.Item>
      <Popover.Item>
        <a href="#">Profile</a>
      </Popover.Item>
      <Popover.Item>
        <a href="#">Projects</a>
      </Popover.Item>
      <Popover.Item line />
      <Popover.Item>
        <a href="#">Logout</a>
      </Popover.Item>
    </>
  );

  return (
    <div style={{ padding: '40px' }}>
      <Popover content={content}>
        <Button auto>Menu Popover</Button>
      </Popover>
    </div>
  );
};
Item.storyName = 'Popover Item';
