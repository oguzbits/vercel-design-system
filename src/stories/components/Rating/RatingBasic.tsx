import React from 'react';
import { Rating, Grid } from '@/components/ui';

export const Basic = () => (
  <Grid.Container gap={2} direction="column">
    <Grid><Rating value={3} count={5} /></Grid>
    <Grid><Rating value={4} count={10} /></Grid>
  </Grid.Container>
);

export const Locked = () => (
  <Grid.Container gap={2} direction="column">
    <Grid><Rating value={3} locked /></Grid>
    <Grid><Rating value={4} type="success" locked /></Grid>
    <Grid><Rating value={2} type="error" locked /></Grid>
  </Grid.Container>
);
