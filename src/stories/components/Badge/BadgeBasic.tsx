import React from 'react';
import { Badge, Grid, Spacer, Avatar } from '@geist-ui/core';

export const Basic = () => (
  <Grid.Container gap={2}>
    <Grid>
      <Badge>Default</Badge>
    </Grid>
    <Grid>
      <Badge type="success">Success</Badge>
    </Grid>
    <Grid>
      <Badge type="warning">Warning</Badge>
    </Grid>
    <Grid>
      <Badge type="error">Error</Badge>
    </Grid>
  </Grid.Container>
);

export const Anchor = () => (
  <Grid.Container gap={2}>
    <Grid>
      <Badge.Anchor>
        <Badge scale={0.5} type="success">1</Badge>
        <Avatar src="https://geist-ui.dev/images/avatar.png" />
      </Badge.Anchor>
    </Grid>
    <Grid>
      <Badge.Anchor placement="bottomRight">
        <Badge scale={0.5} type="error">10+</Badge>
        <Avatar text="W" />
      </Badge.Anchor>
    </Grid>
  </Grid.Container>
);
