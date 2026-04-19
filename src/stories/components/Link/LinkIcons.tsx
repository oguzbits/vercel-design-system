import React from 'react';
import { Link, Grid } from '@geist-ui/core';

export const Icons = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', padding: '20px' }}>
      <Link href="#" icon>External Link</Link>
      <Link href="#" icon color>Colored External Link</Link>
    </div>
  );
};
Icons.storyName = 'With Icons';
