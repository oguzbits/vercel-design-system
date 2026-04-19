import React from 'react';
import { Slider } from '@geist-ui/core';

export const Type = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', maxWidth: '400px', padding: '20px' }}>
      <Slider type="default" initialValue={20} />
      <Slider type="success" initialValue={40} />
      <Slider type="warning" initialValue={60} />
      <Slider type="error" initialValue={80} />
      <Slider type="secondary" initialValue={50} />
    </div>
  );
};
Type.storyName = 'Status Colors';
