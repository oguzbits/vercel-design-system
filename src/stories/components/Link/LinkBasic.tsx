import React from 'react';
import { Link, Grid, Text } from '@geist-ui/core';

export const Basic = () => (
  <Grid.Container gap={2} direction="column">
    <Grid><Link href="#">Default Link</Link></Grid>
    <Grid><Link href="#" color>Secondary Color Link</Link></Grid>
    <Grid><Link href="#" underline>Underline Link</Link></Grid>
    <Grid><Link href="#" block>Block Link (hover effect)</Link></Grid>
  </Grid.Container>
);

export const External = () => (
    <Grid.Container gap={2} direction="column">
        <Grid><Link href="https://github.com/geist-ui/core" icon target="_blank">View on GitHub</Link></Grid>
        <Grid><Link href="https://geist-ui.dev" icon color target="_blank">Official Docs</Link></Grid>
    </Grid.Container>
);
