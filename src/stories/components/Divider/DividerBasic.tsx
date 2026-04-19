import React from 'react';
import { Divider, Grid, Text } from '@geist-ui/core';

export const Basic = () => (
  <Grid.Container direction="column">
    <Grid><Text p>Upper Section</Text></Grid>
    <Grid><Divider /></Grid>
    <Grid><Text p>Lower Section</Text></Grid>
  </Grid.Container>
);

export const Types = () => (
  <Grid.Container direction="column">
    <Grid><Text p>Success</Text><Divider type="success" /></Grid>
    <Grid><Text p>Warning</Text><Divider type="warning" /></Grid>
    <Grid><Text p>Error</Text><Divider type="error" /></Grid>
  </Grid.Container>
);

export const Alignment = () => (
    <Grid.Container direction="column">
      <Grid><Divider align="start">Start</Divider></Grid>
      <Grid><Divider align="center">Center</Divider></Grid>
      <Grid><Divider align="end">End</Divider></Grid>
    </Grid.Container>
);
