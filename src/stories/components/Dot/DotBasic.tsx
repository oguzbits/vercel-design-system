import React from 'react';
import { Dot, Grid, Spacer } from '@geist-ui/core';

export const Basic = () => (
  <Grid.Container gap={2}>
    <Grid><Dot>Default</Dot></Grid>
    <Grid><Dot type="success">Success</Dot></Grid>
    <Grid><Dot type="warning">Warning</Dot></Grid>
    <Grid><Dot type="error">Error</Dot></Grid>
    <Grid><Dot type="secondary">Secondary</Dot></Grid>
  </Grid.Container>
);

export const Labels = () => (
  <Grid.Container gap={2}>
    <Grid><Dot type="success">Ready</Dot></Grid>
    <Grid><Dot type="warning">Building</Dot></Grid>
    <Grid><Dot type="error">Failed</Dot></Grid>
  </Grid.Container>
);
