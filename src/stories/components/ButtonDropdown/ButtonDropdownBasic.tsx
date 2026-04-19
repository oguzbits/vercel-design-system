import React from 'react';
import { ButtonDropdown, Grid, Spacer } from '@geist-ui/core';

export const Basic = () => (
  <ButtonDropdown>
    <ButtonDropdown.Item main>Default Action</ButtonDropdown.Item>
    <ButtonDropdown.Item>Secondary Action</ButtonDropdown.Item>
    <ButtonDropdown.Item>Tertiary Action</ButtonDropdown.Item>
  </ButtonDropdown>
);

export const Types = () => (
  <Grid.Container gap={2}>
    <Grid>
      <ButtonDropdown type="success">
        <ButtonDropdown.Item main>Success Action</ButtonDropdown.Item>
        <ButtonDropdown.Item>Secondary Action</ButtonDropdown.Item>
      </ButtonDropdown>
    </Grid>
    <Grid>
      <ButtonDropdown type="warning">
        <ButtonDropdown.Item main>Warning Action</ButtonDropdown.Item>
        <ButtonDropdown.Item>Secondary Action</ButtonDropdown.Item>
      </ButtonDropdown>
    </Grid>
    <Grid>
      <ButtonDropdown type="error">
        <ButtonDropdown.Item main>Error Action</ButtonDropdown.Item>
        <ButtonDropdown.Item>Secondary Action</ButtonDropdown.Item>
      </ButtonDropdown>
    </Grid>
  </Grid.Container>
);

export const Loading = () => (
    <ButtonDropdown loading>
      <ButtonDropdown.Item main>Default Action</ButtonDropdown.Item>
    </ButtonDropdown>
);
