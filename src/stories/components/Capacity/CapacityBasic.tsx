import React from 'react';
import { Capacity, Grid, Spacer } from '@geist-ui/core';

export const Basic = () => (
  <Grid.Container gap={2} direction="column">
    <Grid><Capacity value={45} /></Grid>
    <Grid><Capacity value={15} type="success" /></Grid>
    <Grid><Capacity value={85} type="error" /></Grid>
  </Grid.Container>
);

export const Colors = () => (
  <Grid.Container gap={2} direction="column">
    <Grid><Capacity value={45} color="cyan" /></Grid>
    <Grid><Capacity value={85} color="#de5000" /></Grid>
  </Grid.Container>
);
