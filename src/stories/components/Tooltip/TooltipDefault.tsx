import React from 'react';
import { Tooltip, Button, Link, Text } from '@geist-ui/core';

export const Default = () => {
  return (
    <div style={{ display: 'flex', gap: '40px', padding: '40px' }}>
      <Tooltip text="Dismiss this notification">
        <Button auto scale={0.5}>Hover Me</Button>
      </Tooltip>

      <Tooltip text={<b>Rich Content</b>}>
        <Link href="#">Documentation</Link>
      </Tooltip>

      <Tooltip text="This is a persistent tip" initialVisible>
        <Text span>Always Visible</Text>
      </Tooltip>
    </div>
  );
};
Default.storyName = 'Default';
