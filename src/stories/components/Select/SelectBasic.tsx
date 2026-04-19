import React from 'react';
import { Select, Grid, Spacer } from '@geist-ui/core';

export const Basic = () => (
  <Grid.Container gap={2}>
    <Grid>
      <Select placeholder="Choose one">
        <Select.Option value="1">Option 1</Select.Option>
        <Select.Option value="2">Option 2</Select.Option>
      </Select>
    </Grid>
    <Grid>
      <Select placeholder="Choose multiple" multiple width="200px">
        <Select.Option value="1">Option 1</Select.Option>
        <Select.Option value="2">Option 2</Select.Option>
        <Select.Option value="3">Option 3</Select.Option>
      </Select>
    </Grid>
  </Grid.Container>
);

export const Types = () => (
  <Grid.Container gap={2}>
    <Grid>
      <Select type="success" initialValue="1">
        <Select.Option value="1">Success</Select.Option>
      </Select>
    </Grid>
    <Grid>
      <Select type="warning" initialValue="1">
        <Select.Option value="1">Warning</Select.Option>
      </Select>
    </Grid>
    <Grid>
      <Select type="error" initialValue="1">
        <Select.Option value="1">Error</Select.Option>
      </Select>
    </Grid>
  </Grid.Container>
);
