import React from 'react';
import { Spinner, Grid, Spacer } from '@geist-ui/core';

export const Basic = () => (
  <Grid.Container gap={2}>
    <Grid><Spinner /></Grid>
  </Grid.Container>
);

export const Sizes = () => (
  <Grid.Container gap={2} alignItems="center">
    <Grid><Spinner scale={0.5} /></Grid>
    <Grid><Spinner scale={1} /></Grid>
    <Grid><Spinner scale={2} /></Grid>
    <Grid><Spinner scale={3} /></Grid>
  </Grid.Container>
);
