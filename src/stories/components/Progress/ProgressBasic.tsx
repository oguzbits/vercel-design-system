import React from 'react';
import { Progress, Grid, Spacer } from '@geist-ui/core';

export const Basic = () => (
  <Grid.Container gap={2} direction="column">
    <Grid><Progress value={30} /></Grid>
    <Grid><Progress value={50} type="success" /></Grid>
    <Grid><Progress value={70} type="warning" /></Grid>
    <Grid><Progress value={90} type="error" /></Grid>
  </Grid.Container>
);

export const Colors = () => (
  <Grid.Container gap={2} direction="column">
    <Grid><Progress value={45} colors={{ 30: 'red', 60: 'yellow', 90: 'green' }} /></Grid>
    <Grid><Progress value={85} colors={{ 30: 'red', 80: 'yellow', 100: 'green' }} /></Grid>
  </Grid.Container>
);
