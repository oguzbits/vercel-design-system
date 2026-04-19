import React from 'react';
import { Input, Grid, Spacer, Text } from '@geist-ui/core';

export const Basic = () => (
  <Grid.Container gap={2}>
    <Grid>
      <Input placeholder="Basic Input" />
    </Grid>
    <Grid>
      <Input initialValue="Clear me" clearable placeholder="Clearable" />
    </Grid>
    <Grid>
      <Input.Password hideToggle placeholder="Password" />
    </Grid>
  </Grid.Container>
);

export const Labels = () => (
  <Grid.Container gap={2}>
    <Grid>
      <Input label="Username" placeholder="vercel" />
    </Grid>
    <Grid>
      <Input labelRight=".com" placeholder="https://github" />
    </Grid>
    <Grid>
      <Input label="https://" labelRight=".com" placeholder="github" />
    </Grid>
  </Grid.Container>
);
