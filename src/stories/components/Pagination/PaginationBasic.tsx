import React from 'react';
import { Pagination, Grid, Spacer } from '@geist-ui/core';

export const Basic = () => (
  <Grid.Container gap={2} direction="column">
    <Grid><Pagination count={20} initialPage={1} /></Grid>
  </Grid.Container>
);

export const Sizes = () => (
  <Grid.Container gap={2} direction="column">
    <Grid><Pagination count={10} scale={0.5} /></Grid>
    <Grid><Pagination count={10} scale={1} /></Grid>
    <Grid><Pagination count={10} scale={1.5} /></Grid>
  </Grid.Container>
);

export const Limit = () => (
  <Grid.Container gap={2} direction="column">
    <Grid><Pagination count={20} limit={5} /></Grid>
    <Grid><Pagination count={20} limit={10} /></Grid>
  </Grid.Container>
);
