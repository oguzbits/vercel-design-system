import React from 'react';
import { Loading, Grid, Spacer, Text } from '@geist-ui/core';

export const Basic = () => (
  <Grid.Container gap={2}>
    <Grid><Loading /></Grid>
    <Grid><Loading>Loading</Loading></Grid>
  </Grid.Container>
);

export const Types = () => (
  <Grid.Container gap={2}>
    <Grid><Loading type="success" /></Grid>
    <Grid><Loading type="warning" /></Grid>
    <Grid><Loading type="error" /></Grid>
    <Grid><Loading type="secondary" /></Grid>
  </Grid.Container>
);

export const TextColor = () => (
    <Grid.Container gap={2}>
      <Grid><Loading color="red">Custom Color</Loading></Grid>
    </Grid.Container>
);
