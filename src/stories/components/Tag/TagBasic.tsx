import React from 'react';
import { Tag, Grid, Spacer } from '@geist-ui/core';

export const Basic = () => (
  <Grid.Container gap={2}>
    <Grid><Tag>Default</Tag></Grid>
    <Grid><Tag type="success">Success</Tag></Grid>
    <Grid><Tag type="warning">Warning</Tag></Grid>
    <Grid><Tag type="error">Error</Tag></Grid>
    <Grid><Tag type="secondary">Secondary</Tag></Grid>
  </Grid.Container>
);

export const Invert = () => (
  <Grid.Container gap={2}>
    <Grid><Tag invert>Default</Tag></Grid>
    <Grid><Tag type="success" invert>Success</Tag></Grid>
    <Grid><Tag type="warning" invert>Warning</Tag></Grid>
    <Grid><Tag type="error" invert>Error</Tag></Grid>
  </Grid.Container>
);
