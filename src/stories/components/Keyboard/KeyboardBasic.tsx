import React from 'react';
import { Keyboard, Grid, Spacer } from '@geist-ui/core';

export const Basic = () => (
  <Grid.Container gap={2}>
    <Grid><Keyboard>f</Keyboard></Grid>
    <Grid><Keyboard command>k</Keyboard></Grid>
    <Grid><Keyboard shift>t</Keyboard></Grid>
    <Grid><Keyboard option>b</Keyboard></Grid>
  </Grid.Container>
);

export const Combination = () => (
    <Grid.Container gap={2}>
      <Grid><Keyboard command shift>p</Keyboard></Grid>
      <Grid><Keyboard command option>n</Keyboard></Grid>
    </Grid.Container>
);
