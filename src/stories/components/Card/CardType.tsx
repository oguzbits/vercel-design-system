import React from 'react';
import { Card, Text, Spacer } from '@geist-ui/core';

export const Type = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px', maxWidth: '600px' }}>
      <Card type="secondary">
        <Text h4>Secondary Card</Text>
        <Text p>This card uses the secondary theme color.</Text>
      </Card>
      
      <Card type="success">
        <Text h4>Success Card</Text>
        <Text p>Indicating a positive or completed state.</Text>
      </Card>
      
      <Card type="warning">
        <Text h4>Warning Card</Text>
        <Text p>Attention required for this resource.</Text>
      </Card>
      
      <Card type="error">
        <Text h4>Error Card</Text>
        <Text p>Critial failure or destructive action context.</Text>
      </Card>

      <Card type="dark">
        <Text h4 style={{ color: 'white' }}>Dark Card</Text>
        <Text p style={{ color: 'white' }}>High contrast surface for prominent sections.</Text>
      </Card>
    </div>
  );
};
Type.storyName = 'Status Colors';
