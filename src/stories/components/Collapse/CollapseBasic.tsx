import React from 'react';
import { Collapse, Text, Grid } from '@geist-ui/core';

export const Basic = () => (
  <Grid.Container gap={2}>
    <Grid xs={24}>
      <Collapse title="Question A">
        <Text>Content for question A.</Text>
      </Collapse>
    </Grid>
    <Grid xs={24}>
      <Collapse shadow title="Shadow Collapse">
        <Text>This collapse has a shadow for better visibility.</Text>
      </Collapse>
    </Grid>
  </Grid.Container>
);

export const Group = () => (
  <Collapse.Group>
    <Collapse title="Question A">
      <Text>Content for question A.</Text>
    </Collapse>
    <Collapse title="Question B">
      <Text>Content for question B.</Text>
    </Collapse>
    <Collapse title="Question C">
      <Text>Content for question C.</Text>
    </Collapse>
  </Collapse.Group>
);
