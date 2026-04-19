import React from 'react';
import { Toggle, Grid, Spacer, Text } from '@geist-ui/core';

export const Basic = () => (
  <Grid.Container gap={2}>
    <Grid>
      <Toggle checked={true} />
    </Grid>
    <Grid>
      <Toggle />
    </Grid>
    <Grid>
      <Toggle disabled />
    </Grid>
  </Grid.Container>
);

export const Sizes = () => (
  <Grid.Container gap={2} alignItems="center">
    <Grid>
      <Toggle scale={0.5} />
      <Text small>Mini</Text>
    </Grid>
    <Grid>
      <Toggle scale={0.8} />
      <Text small>Small</Text>
    </Grid>
    <Grid>
      <Toggle />
      <Text small>Medium</Text>
    </Grid>
    <Grid>
      <Toggle scale={1.25} />
      <Text small>Large</Text>
    </Grid>
  </Grid.Container>
);

export const Types = () => (
  <Grid.Container gap={2}>
    <Grid><Toggle type="success" checked /></Grid>
    <Grid><Toggle type="warning" checked /></Grid>
    <Grid><Toggle type="error" checked /></Grid>
  </Grid.Container>
);
