import React from 'react';
import { Badge, Avatar } from '@geist-ui/core';

export const Dot = () => {
  return (
    <div style={{ display: 'flex', gap: '40px', padding: '20px', alignItems: 'center' }}>
      <Badge dot type="success">
        <Avatar src="https://zeit.co/api/www/avatar/?u=evilrabbit&s=160" />
      </Badge>
      
      <Badge dot type="warning">
        <Text span>Inbox</Text>
      </Badge>

      <Badge dot type="error">
        <Avatar isSquare text="W" />
      </Badge>
    </div>
  );
};
import { Text } from '@geist-ui/core';
Dot.storyName = 'Notification Dots';
