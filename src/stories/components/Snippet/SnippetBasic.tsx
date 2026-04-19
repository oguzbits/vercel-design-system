import React from 'react';
import { Snippet, Grid, Spacer } from '@geist-ui/core';

export const Basic = () => (
  <Grid.Container gap={2} direction="column">
    <Grid><Snippet text="yarn add @geist-ui/core" width="300px" /></Grid>
    <Grid><Snippet text="npm install @geist-ui/core" type="success" width="300px" /></Grid>
    <Grid><Snippet text="pnpm add @geist-ui/core" type="warning" width="300px" /></Grid>
    <Grid><Snippet text="bun add @geist-ui/core" type="error" width="300px" /></Grid>
  </Grid.Container>
);

export const MultiLine = () => (
    <Grid.Container gap={2} direction="column">
      <Grid>
        <Snippet text={['cd project', 'yarn install', 'yarn dev']} width="300px" />
      </Grid>
    </Grid.Container>
);

export const NoCopy = () => (
    <Grid.Container gap={2} direction="column">
      <Grid>
        <Snippet text="git clone https://github.com/geist-ui/core.git" copy="prevent" width="300px" />
      </Grid>
    </Grid.Container>
);
