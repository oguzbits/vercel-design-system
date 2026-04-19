import React from 'react';
import { Tree } from '@geist-ui/core';

export const Basic = {
  tags: ['!sidebar'],
  render: () => (
    <Tree>
      <Tree.File name="src/index.js" />
      <Tree.Folder name="components">
        <Tree.File name="button.js" />
        <Tree.File name="card.js" />
      </Tree.Folder>
      <Tree.File name="package.json" />
    </Tree>
  )
};

export const InitialExpand = {
  tags: ['!sidebar'],
  render: () => (
    <Tree initialExpand>
      <Tree.Folder name="src">
        <Tree.File name="index.js" />
      </Tree.Folder>
    </Tree>
  )
};

export const Imperative = {
  tags: ['!sidebar'],
  render: () => {
    const files = [
      {
        type: 'directory',
        name: 'src',
        files: [
          {
            type: 'file',
            name: 'index.js',
          },
        ],
      },
      {
        type: 'file',
        name: 'package.json',
      },
    ];
    return <Tree value={files} />;
  }
};
