import React from 'react';
import { Pagination } from '@geist-ui/core';

export const Size = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', padding: '20px' }}>
      <Pagination count={5} scale={0.5} />
      <Pagination count={5} scale={1} />
      <Pagination count={5} scale={1.5} />
    </div>
  );
};
Size.storyName = 'Scaling';
