import React from 'react';
import { Card, Text } from '@geist-ui/core';

export const Default = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <Card>
        <Text h4>Standard Card</Text>
        <Text p>This is a basic card component for grouping related information.</Text>
      </Card>
      
      <div style={{ padding: '20px 0' }}>
        <Card shadow>
          <Text h4>Shadow Card</Text>
          <Text p>This card features a soft shadow for depth and elevation.</Text>
        </Card>
      </div>
    </div>
  );
};
Default.storyName = 'Default & Shadow';
