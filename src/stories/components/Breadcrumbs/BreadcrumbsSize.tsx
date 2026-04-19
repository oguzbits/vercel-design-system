import React from 'react';
import { Breadcrumbs } from '@geist-ui/core';

export const Size = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', padding: '20px' }}>
      <Breadcrumbs scale={0.5}>
        <Breadcrumbs.Item>Home</Breadcrumbs.Item>
        <Breadcrumbs.Item>Small</Breadcrumbs.Item>
      </Breadcrumbs>
      
      <Breadcrumbs scale={1}>
        <Breadcrumbs.Item>Home</Breadcrumbs.Item>
        <Breadcrumbs.Item>Default</Breadcrumbs.Item>
      </Breadcrumbs>
      
      <Breadcrumbs scale={1.5}>
        <Breadcrumbs.Item>Home</Breadcrumbs.Item>
        <Breadcrumbs.Item>Large</Breadcrumbs.Item>
      </Breadcrumbs>
    </div>
  );
};
Size.storyName = 'Scaling';
