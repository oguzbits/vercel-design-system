import React from 'react';
import { User, Grid } from '@geist-ui/core';

export const Basic = () => (
  <Grid.Container gap={2}>
    <Grid>
      <User src="https://geist-ui.dev/images/avatar.png" name="Geist UI" />
    </Grid>
    <Grid>
      <User src="https://geist-ui.dev/images/avatar.png" name="Geist UI">
        <User.Link href="https://github.com/geist-ui/core">@geist-ui</User.Link>
      </User>
    </Grid>
  </Grid.Container>
);

export const Description = () => (
  <Grid.Container gap={2}>
    <Grid>
      <User src="https://geist-ui.dev/images/avatar.png" name="Jane Doe">
        Project Manager
      </User>
    </Grid>
  </Grid.Container>
);
