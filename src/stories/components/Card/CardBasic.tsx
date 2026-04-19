import React from 'react';
import { Card, Text, Link, Grid } from '@geist-ui/core';

export const Basic = () => (
  <Card width="400px">
    <Text h4 my={0}>Geist UI</Text>
    <Text p>Clean, minimalistic, and fast React component library.</Text>
    <Card.Footer>
      <Link color target="_blank" href="https://github.com/geist-ui/core">View Source Code</Link>
    </Card.Footer>
  </Card>
);

export const Hoverable = () => (
  <Grid.Container gap={2}>
    <Grid>
      <Card width="200px" hoverable shadow>
        <Text h4 my={0}>Hover me</Text>
      </Card>
    </Grid>
    <Grid>
      <Card width="200px" shadow>
        <Text h4 my={0}>Shadow only</Text>
      </Card>
    </Grid>
  </Grid.Container>
);
