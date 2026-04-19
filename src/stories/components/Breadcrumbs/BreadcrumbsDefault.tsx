import React from 'react';
import { Breadcrumbs } from '@geist-ui/core';
import { Home, User } from '@geist-ui/icons';

export const Default = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Breadcrumbs>
        <Breadcrumbs.Item>Home</Breadcrumbs.Item>
        <Breadcrumbs.Item>Dashboard</Breadcrumbs.Item>
        <Breadcrumbs.Item>Analytics</Breadcrumbs.Item>
      </Breadcrumbs>
      
      <div style={{ marginTop: '20px' }}>
        <Breadcrumbs>
          <Breadcrumbs.Item href="#"><Home size={16} /> Home</Breadcrumbs.Item>
          <Breadcrumbs.Item href="#"><User size={16} /> Users</Breadcrumbs.Item>
          <Breadcrumbs.Item>Settings</Breadcrumbs.Item>
        </Breadcrumbs>
      </div>
    </div>
  );
};
Default.storyName = 'Default';
