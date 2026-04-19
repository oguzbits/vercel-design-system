import React from 'react';
import { ImageBrowser, Image, Spacer, Text } from '@geist-ui/core';

export const Browser = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px' }}>
      <Text small b>Standard Browser</Text>
      <ImageBrowser url="https://geist-ui.dev" title="Geist UI - Official Documentation">
        <Image src="https://geist-ui.dev/images/custom-domains.png" width="540px" height="246px" />
      </ImageBrowser>
      
      <Spacer h={2}/>
      
      <Text small b>Inverted Browser with Full Link</Text>
      <ImageBrowser invert showFullLink url="https://vercel.com/design" title="Vercel Design System">
        <Image src="https://geist-ui.dev/images/display.png" width="540px" height="246px" />
      </ImageBrowser>
    </div>
  );
};
Browser.storyName = 'Image Browser';
