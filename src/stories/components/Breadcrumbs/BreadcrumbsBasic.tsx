import React from 'react';
import { Breadcrumbs, Grid } from '@geist-ui/core';

export const Basic = () => (
  <Grid.Container gap={2} direction="column">
    <Grid>
      <Breadcrumbs>
        <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
        <Breadcrumbs.Item href="/components">Components</Breadcrumbs.Item>
        <Breadcrumbs.Item>Breadcrumbs</Breadcrumbs.Item>
      </Breadcrumbs>
    </Grid>
  </Grid.Container>
);

export const Separator = () => (
    <Grid.Container gap={2} direction="column">
      <Grid>
        <Breadcrumbs separator=">">
          <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
          <Breadcrumbs.Item href="/components">Components</Breadcrumbs.Item>
          <Breadcrumbs.Item>Breadcrumbs</Breadcrumbs.Item>
        </Breadcrumbs>
      </Grid>
    </Grid.Container>
  );
