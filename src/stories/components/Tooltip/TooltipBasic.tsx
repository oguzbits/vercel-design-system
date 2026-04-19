import React from 'react';
import { Tooltip, Button, Grid, Spacer } from '@geist-ui/core';

export const Basic = () => (
  <Grid.Container gap={2}>
    <Grid>
      <Tooltip text="Meow! I am a tooltip.">
        <Button auto>Default</Button>
      </Tooltip>
    </Grid>
    <Grid>
      <Tooltip text="Success style" type="success">
        <Button auto type="success">Success</Button>
      </Tooltip>
    </Grid>
  </Grid.Container>
);

export const Placement = () => (
    <Grid.Container gap={2} direction="column">
      <Grid style={{ display: 'flex', gap: '20px' }}>
        <Tooltip text="Top" placement="top">
          <Button auto>Top</Button>
        </Tooltip>
        <Tooltip text="Right" placement="right">
          <Button auto>Right</Button>
        </Tooltip>
        <Tooltip text="Bottom" placement="bottom">
            <Button auto>Bottom</Button>
        </Tooltip>
        <Tooltip text="Left" placement="left">
            <Button auto>Left</Button>
        </Tooltip>
      </Grid>
    </Grid.Container>
  );
