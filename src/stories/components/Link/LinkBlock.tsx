import React from 'react';
import { Link, Grid } from '@geist-ui/core';

export const Block = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Link href="#" block>Modern Block Link</Link>
      <Link href="#" block color>Colored Block Link</Link>
    </div>
  );
};
Block.storyName = 'Block Style';
