import React from 'react';
import { Image, Grid, Spacer, Text } from '@geist-ui/core';

export const Basic = () => (
  <Grid.Container gap={2}>
    <Grid xs={24}>
      <Image 
        width="540px" 
        height="160px" 
        src="https://geist-ui.dev/images/custom-domains.png" 
        alt="Geist UI"
      />
    </Grid>
  </Grid.Container>
);

export const Browser = () => (
  <div style={{ padding: '20px' }}>
    <Image.Browser url="https://geist-ui.dev" title="Geist UI Documentation">
      <Image 
        width="540px" 
        height="246px" 
        src="https://geist-ui.dev/images/custom-domains.png" 
        alt="Geist UI"
      />
    </Image.Browser>
  </div>
);

export const Skeleton = () => (
  <Image 
    width="540px" 
    height="160px" 
    src="non-existent" 
    alt="Loading Skeleton"
  />
);
