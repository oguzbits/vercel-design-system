import React from 'react';
import { Spinner, Grid } from '@geist-ui/core';

export const Size = () => {
  return (
    <Grid.Container gap={5} justify="center" style={{ padding: '40px' }}>
      <Grid><Spinner scale={0.5} /></Grid>
      <Grid><Spinner scale={1} /></Grid>
      <Grid><Spinner scale={1.5} /></Grid>
      <Grid><Spinner scale={2} /></Grid>
    </Grid.Container>
  );
};
Size.storyName = 'Scaling';
