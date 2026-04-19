import React from 'react';
import { Keyboard } from '@geist-ui/core';

export const Basic = {
  tags: ['!sidebar'],
  render: () => <Keyboard>f</Keyboard>
};

export const Modifiers = {
  tags: ['!sidebar'],
  render: () => (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Keyboard command>f</Keyboard>
      <Keyboard shift>e</Keyboard>
      <Keyboard option>b</Keyboard>
      <Keyboard ctrl>n</Keyboard>
    </div>
  )
};

export const Combination = {
  tags: ['!sidebar'],
  render: () => (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Keyboard command shift>e</Keyboard>
      <Keyboard option ctrl>b</Keyboard>
    </div>
  )
};
