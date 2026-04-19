import React from 'react';
import { Link, Grid } from '@geist-ui/core';

export const Colors = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', padding: '20px' }}>
      <Link href="#">Standard (Monochrome)</Link>
      <Link href="#" color>Themed (Color)</Link>
    </div>
  );
};
Colors.storyName = 'Themed Colors';
