import React from 'react';
import { Link, Text } from '@geist-ui/core';

export const Default = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', padding: '20px' }}>
      <Text>
        Check out our <Link href="#">documentation</Link> for more details.
      </Text>
      <Text>
        Visit the <Link href="#" underline>official website</Link> with underline enabled.
      </Text>
    </div>
  );
};
Default.storyName = 'Default';
