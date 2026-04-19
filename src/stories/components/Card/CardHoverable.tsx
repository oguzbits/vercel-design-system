import React from 'react';
import { Card, Text, Link } from '@geist-ui/core';

export const Hoverable = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <Card hoverable>
        <Text h4>Hoverable Card</Text>
        <Text p>This card reacts to the user's cursor, making it great for clickable items.</Text>
      </Card>
      
      <div style={{ padding: '20px 0' }}>
        <Link href="https://nextjs.org" block width="100%">
          <Card hoverable width="100%">
            <Text h4>Clickable Wrapper</Text>
            <Text p>You can wrap cards in Links to create high-fidelity navigation panels.</Text>
          </Card>
        </Link>
      </div>
    </div>
  );
};
Hoverable.storyName = 'Hoverable & Interactive';
