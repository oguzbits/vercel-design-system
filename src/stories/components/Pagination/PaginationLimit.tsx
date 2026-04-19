import React from 'react';
import { Pagination, Spacer, Text } from '@geist-ui/core';

export const Limit = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', padding: '20px' }}>
      <div>
        <Text small b>Limit: 3 (Standard)</Text>
        <Pagination count={20} limit={3} initialPage={10} />
      </div>
      
      <div>
        <Text small b>Limit: 10 (Wide)</Text>
        <Pagination count={20} limit={10} initialPage={10} />
      </div>

      <div>
        <Text small b>Next/Previous Labels (Implicit)</Text>
        <Pagination count={5}>
          <Pagination.Previous>Prev</Pagination.Previous>
          <Pagination.Next>Next</Pagination.Next>
        </Pagination>
      </div>
    </div>
  );
};
Limit.storyName = 'Limits & Customization';
