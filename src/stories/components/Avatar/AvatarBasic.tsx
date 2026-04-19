import React from 'react';
import { Avatar, Grid, Spacer } from '@geist-ui/core';

export const Basic = () => (
  <Grid.Container gap={2}>
    <Grid>
      <Avatar src="https://geist-ui.dev/images/avatar.png" />
    </Grid>
    <Grid>
      <Avatar src="https://geist-ui.dev/images/avatar.png" scale={2} />
    </Grid>
    <Grid>
      <Avatar text="W" />
    </Grid>
  </Grid.Container>
);

export const Group = () => (
  <Avatar.Group>
    <Avatar src="https://geist-ui.dev/images/avatar.png" />
    <Avatar src="https://geist-ui.dev/images/avatar.png" />
    <Avatar src="https://geist-ui.dev/images/avatar.png" />
    <Avatar text="+3" />
  </Avatar.Group>
);
