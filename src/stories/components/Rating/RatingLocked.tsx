import React from 'react';
import { Rating, Text, Spacer } from '@geist-ui/core';

export const Locked = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <Text b>Average User Rating (Read-only)</Text>
      <Rating locked value={4} />
      <Spacer />
      <Text small b>Completed Task Rating</Text>
      <Rating locked value={5} type="success" />
      <Spacer />
      <Text small b>Poor Performance</Text>
      <Rating locked value={1} type="error" />
    </div>
  );
};
Locked.storyName = 'Read-only / Locked';
