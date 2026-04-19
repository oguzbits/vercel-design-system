import React from 'react';
import { Spacer, Text, Card } from '@geist-ui/core';

export const Default = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <Card>
        <Text h4>Section One</Text>
        <Spacer h={2} />
        <Text>There is significant space above this text using h={2}.</Text>
      </Card>
      
      <Spacer h={3} />
      
      <Card>
        <Text h4>Section Two</Text>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Text>Inline Item</Text>
          <Spacer w={3} inline />
          <Text>Spaced Inline Item</Text>
        </div>
      </Card>
    </div>
  );
};
Default.storyName = 'Scaling Spaces';
