import React from 'react';
import { Breadcrumbs } from '@geist-ui/core';
import { ChevronRight } from '@geist-ui/icons';

export const Separator = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', padding: '20px' }}>
      <div>
        <Breadcrumbs separator=">">
          <Breadcrumbs.Item>Home</Breadcrumbs.Item>
          <Breadcrumbs.Item>Projects</Breadcrumbs.Item>
          <Breadcrumbs.Item>Vercel</Breadcrumbs.Item>
        </Breadcrumbs>
      </div>

      <div>
        <Breadcrumbs separator={<ChevronRight size={14} />}>
          <Breadcrumbs.Item href="#">Library</Breadcrumbs.Item>
          <Breadcrumbs.Item href="#">Components</Breadcrumbs.Item>
          <Breadcrumbs.Item>Navigation</Breadcrumbs.Item>
        </Breadcrumbs>
      </div>

      <div>
        <Breadcrumbs separator="|">
          <Breadcrumbs.Item>Home</Breadcrumbs.Item>
          <Breadcrumbs.Item>Help</Breadcrumbs.Item>
          <Breadcrumbs.Item>Documentation</Breadcrumbs.Item>
        </Breadcrumbs>
      </div>
    </div>
  );
};
Separator.storyName = 'Custom Separator';
