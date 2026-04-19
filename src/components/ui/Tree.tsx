import React from 'react';
import { Tree as GeistTree, TreeProps } from '@geist-ui/core';
import type { TreeFileProps } from '@geist-ui/core/esm/tree/tree-file';
import type { TreeFolderProps } from '@geist-ui/core/esm/tree/tree-folder';

/**
 * Wrapper for Geist UI Tree to ensure compatibility with React 19.
 * 
 * Provides explicit default values for sub-components (File, Folder)
 * which React 19 no longer supports via 'defaultProps'.
 */

const TreeFile: React.FC<TreeFileProps> = (props) => {
  const { level = 0, ...rest } = props;
  return <GeistTree.File level={level} {...rest} />;
};

const TreeFolder: React.FC<TreeFolderProps> = (props) => {
  const { level = 0, ...rest } = props;
  return <GeistTree.Folder level={level} {...rest} />;
};

const TreeWrapper: React.FC<TreeProps> & {
  File: typeof TreeFile;
  Folder: typeof TreeFolder;
} = (props) => {
  return <GeistTree {...props} />;
};

TreeWrapper.File = TreeFile;
TreeWrapper.Folder = TreeFolder;

export const Tree = TreeWrapper;
