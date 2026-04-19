import React from 'react';
import { Textarea, Grid, Spacer } from '@geist-ui/core';

export const Basic = () => (
  <Grid.Container gap={2} direction="column">
    <Grid><Textarea placeholder="Please enter some text" /></Grid>
    <Grid><Textarea width="100%" placeholder="Full width textarea" /></Grid>
  </Grid.Container>
);

export const Types = () => (
  <Grid.Container gap={2} direction="column">
    <Grid><Textarea type="success" placeholder="Success style" /></Grid>
    <Grid><Textarea type="warning" placeholder="Warning style" /></Grid>
    <Grid><Textarea type="error" placeholder="Error style" /></Grid>
  </Grid.Container>
);

export const Resize = () => (
    <Grid.Container gap={2} direction="column">
      <Grid><Textarea placeholder="Resize: vertical" resize="vertical" /></Grid>
      <Grid><Textarea placeholder="Resize: horizontal" resize="horizontal" /></Grid>
      <Grid><Textarea placeholder="Resize: none" resize="none" /></Grid>
    </Grid.Container>
);
