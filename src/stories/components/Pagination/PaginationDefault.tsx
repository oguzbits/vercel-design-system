import React from 'react';
import { Pagination } from '@geist-ui/core';

export const Default = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Pagination count={10} initialPage={1} />
    </div>
  );
};
Default.storyName = 'Default';
