import React from 'react';
import { Tree, Grid } from '@geist-ui/core';

export const Basic = () => {
  const files = [
    {
      type: 'directory',
      name: 'src',
      children: [
        { type: 'file', name: 'index.ts' },
        { type: 'file', name: 'app.tsx' },
      ],
    },
    { type: 'file', name: 'package.json' },
  ];
  return (
    <div style={{ width: '300px' }}>
      <Tree value={files} />
    </div>
  );
};

export const Icons = () => {
  const files = [
    {
      type: 'directory',
      name: 'assets',
      children: [
        { type: 'file', name: 'logo.png' },
      ],
    },
    { type: 'file', name: 'README.md' },
  ];
  return (
    <div style={{ width: '300px' }}>
      <Tree value={files} initialExpand />
    </div>
  );
};
