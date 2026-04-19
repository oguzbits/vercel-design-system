import React from 'react';
import { Note, Grid, Spacer } from '@geist-ui/core';

export const Basic = () => (
  <Grid.Container gap={2} direction="column">
    <Grid><Note label="hint">This is a basic note.</Note></Grid>
    <Grid><Note label={false}>This note has no label.</Note></Grid>
    <Grid><Note small>This is a small note.</Note></Grid>
  </Grid.Container>
);

export const Types = () => (
  <Grid.Container gap={2} direction="column">
    <Grid><Note type="secondary">Secondary Note</Note></Grid>
    <Grid><Note type="success">Success Note</Note></Grid>
    <Grid><Note type="warning">Warning Note</Note></Grid>
    <Grid><Note type="error">Error Note</Note></Grid>
  </Grid.Container>
);

export const Filled = () => (
  <Grid.Container gap={2} direction="column">
    <Grid><Note fill type="secondary">Filled Secondary</Note></Grid>
    <Grid><Note fill type="success">Filled Success</Note></Grid>
    <Grid><Note fill type="warning">Filled Warning</Note></Grid>
    <Grid><Note fill type="error">Filled Error</Note></Grid>
  </Grid.Container>
);
