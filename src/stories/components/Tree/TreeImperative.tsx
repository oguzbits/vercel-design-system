import React from 'react';
import { Tree } from '@geist-ui/core';

export const Imperative = () => {
  const files = [
    {
      type: 'directory',
      name: 'bin',
      files: [
        { type: 'file', name: 'executable.sh' },
      ],
    },
    {
      type: 'directory',
      name: 'lib',
      files: [
        { type: 'file', name: 'utils.js' },
        { type: 'file', name: 'core.js' },
      ],
    },
    { type: 'file', name: 'config.json' },
  ] as const;

  return (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <Tree value={files} />
    </div>
  );
};
Imperative.displayName = 'Imperative (Value Prop)';
