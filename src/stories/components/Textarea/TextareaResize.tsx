import React from 'react';
import { Textarea, Text } from '@geist-ui/core';

export const Resize = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', maxWidth: '600px' }}>
      <div>
        <Text small b>Resize: None</Text>
        <Textarea resize="none" placeholder="Fixed size" width="100%" />
      </div>
      <div>
        <Text small b>Resize: Vertical (Recommended)</Text>
        <Textarea resize="vertical" placeholder="Only vertical expansion" width="100%" />
      </div>
      <div>
        <Text small b>Resize: Horizontal</Text>
        <Textarea resize="horizontal" placeholder="Only horizontal expansion" width="100%" />
      </div>
      <div>
        <Text small b>Resize: Both</Text>
        <Textarea resize="both" placeholder="Full flexibility" width="100%" />
      </div>
    </div>
  );
};
Resize.storyName = 'Resize Behavior';
