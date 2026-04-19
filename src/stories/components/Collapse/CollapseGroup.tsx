import React from 'react';
import { Collapse, Text } from '@geist-ui/core';

export const Group = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <Collapse.Group>
        <Collapse title="Section 1" initialVisible>
          <Text p>Initial visible content to guide the user.</Text>
        </Collapse>
        <Collapse title="Section 2">
          <Text p>Secondary content that remains hidden until requested.</Text>
        </Collapse>
        <Collapse title="Section 3">
          <Text p>Tertiary content for advanced users or edge cases.</Text>
        </Collapse>
      </Collapse.Group>
    </div>
  );
};
Group.storyName = 'Accordion Group';
