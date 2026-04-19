import React from 'react';
import { Checkbox, Grid, Spacer } from '@geist-ui/core';

export const Basic = () => (
  <Grid.Container gap={2}>
    <Grid>
      <Checkbox checked={true}>Option 1</Checkbox>
    </Grid>
    <Grid>
      <Checkbox>Option 2</Checkbox>
    </Grid>
    <Grid>
      <Checkbox disabled>Disabled</Checkbox>
    </Grid>
  </Grid.Container>
);

export const Group = () => (
  <Checkbox.Group value={['1', '3']}>
    <Checkbox value="1">Option 1</Checkbox>
    <Checkbox value="2">Option 2</Checkbox>
    <Checkbox value="3">Option 3</Checkbox>
  </Checkbox.Group>
);

export const Types = () => (
  <Grid.Container gap={2}>
    <Grid><Checkbox type="success" checked>Success</Checkbox></Grid>
    <Grid><Checkbox type="warning" checked>Warning</Checkbox></Grid>
    <Grid><Checkbox type="error" checked>Error</Checkbox></Grid>
  </Grid.Container>
);
