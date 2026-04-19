import React, { useState } from 'react';
import { Popover, Button, Link, Text, Spacer } from '@/components/ui';

export const Basic = () => {
  const content = () => (
    <div style={{ padding: '0 10px' }}>
      <Text b>Popover Content</Text>
      <Text p>This is the content of the popover.</Text>
    </div>
  );
  return (
    <Popover content={content}>
      <Button auto>Click Me</Button>
    </Popover>
  );
};

export const Menu = () => {
    const content = () => (
      <>
        <Popover.Item title>
          <span>User Settings</span>
        </Popover.Item>
        <Popover.Item>
          <Link href="#">Profile</Link>
        </Popover.Item>
        <Popover.Item>
          <Link href="#">Projects</Link>
        </Popover.Item>
        <Popover.Item line />
        <Popover.Item>
          <Link color href="#">Logout</Link>
        </Popover.Item>
      </>
    );
    return (
      <Popover content={content} placement="bottomEnd">
        <Button auto>Menu</Button>
      </Popover>
    );
};
