import React from 'react';
import { Description, Grid } from '@geist-ui/core';

export const Basic = () => (
  <Grid.Container gap={2} direction="column">
    <Grid>
      <Description title="Section Title" content="This is the description content." />
    </Grid>
    <Grid>
      <Description title="Status" content="Ready" />
    </Grid>
  </Grid.Container>
);

export const CustomContent = () => (
  <Grid.Container gap={2} direction="column">
    <Grid>
      <Description title="Section Title" content={<span>Custom <b>HTML</b> content</span>} />
    </Grid>
  </Grid.Container>
);
