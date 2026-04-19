import React from 'react';
import { Dot, Spacer } from '@geist-ui/core';

export const Basic = {
  tags: ['!sidebar'],
  render: () => (
    <>
      <Dot style={{ marginRight: '20px' }} />
      <Dot style={{ marginRight: '20px' }} type="success" />
      <Dot style={{ marginRight: '20px' }} type="warning" />
      <Dot type="error" />
    </>
  )
};

export const Text = {
  tags: ['!sidebar'],
  render: () => (
    <>
      <Dot style={{ marginRight: '20px' }}>Canceled</Dot>
      <Dot style={{ marginRight: '20px' }} type="success">Ready</Dot>
      <Dot style={{ marginRight: '20px' }} type="warning">Warning</Dot>
      <Dot type="error">Error</Dot>
    </>
  )
};
