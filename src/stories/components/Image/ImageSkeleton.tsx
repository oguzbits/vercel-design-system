import React from 'react';
import { Image, Spacer, Text } from '@geist-ui/core';

export const Skeleton = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px' }}>
      <Text small b>With Skeleton (Default)</Text>
      <Image src="http://www.transparentpng.com/download/ghost/9G2v8C-ghost-free-download-transparent.png" width="200px" height="200px" />
      <Spacer />
      <Text small b>Disabled Skeleton</Text>
      <Image disableSkeleton src="http://www.transparentpng.com/download/ghost/9G2v8C-ghost-free-download-transparent.png" width="200px" height="200px" />
    </div>
  );
};
Skeleton.storyName = 'Skeleton Loading';
