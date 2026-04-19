import React from 'react';
import { Display, Image } from '@geist-ui/core';

export const Default = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px' }}>
      <Display caption="Geist UI provides a set of high-quality components for building modern web applications.">
        <Image src="https://geist-ui.dev/images/display.png" width="540px" height="246px" />
      </Display>
    </div>
  );
};
Default.storyName = 'Default';
