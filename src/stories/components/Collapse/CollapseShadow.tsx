import React from 'react';
import { Collapse, Text } from '@geist-ui/core';

export const Shadow = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <Collapse shadow title="Elevated Content" subtitle="Visible depth for prominence">
        <Text p>
          Shadows help the collapsed section stand out as a separate entity, similar to a card or a focused piece of information.
        </Text>
      </Collapse>
    </div>
  );
};
Shadow.storyName = 'Shadow Variation';
