import React from 'react';
import { Image } from '@geist-ui/core';

export const Default = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px' }}>
      <Image src="https://geist-ui.dev/images/custom-domains.png" width="540px" height="246px" />
    </div>
  );
};
Default.storyName = 'Default';
