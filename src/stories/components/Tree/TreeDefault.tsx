import React from 'react';
import { Tree } from '@geist-ui/core';

export const Default = () => {
  const files = [
    {
      type: 'directory',
      name: 'src',
      files: [
        { type: 'file', name: 'index.ts' },
        {
          type: 'directory',
          name: 'components',
          files: [
            { type: 'file', name: 'Button.tsx' },
            { type: 'file', name: 'Input.tsx' },
          ],
        },
      ],
    },
    { type: 'file', name: 'package.json' },
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <Tree value={files as any} />
    </div>
  );
};
Default.displayName = 'Default (Standard)';
