import React from 'react';
import { Slider, Grid, Spacer } from '@geist-ui/core';

export const Basic = () => (
  <Grid.Container gap={2} direction="column" width="300px">
    <Grid><Slider initialValue={20} /></Grid>
    <Grid><Slider initialValue={40} type="success" /></Grid>
    <Grid><Slider initialValue={60} type="warning" /></Grid>
    <Grid><Slider initialValue={80} type="error" /></Grid>
  </Grid.Container>
);

export const Step = () => (
    <Grid.Container gap={2} direction="column" width="300px">
      <Grid><Slider step={10} showMarkers /></Grid>
      <Grid><Slider step={0.2} /></Grid>
    </Grid.Container>
);

export const Disabled = () => (
    <Grid.Container gap={2} direction="column" width="300px">
      <Grid><Slider initialValue={40} disabled /></Grid>
    </Grid.Container>
);
