import React from 'react';
import { Tooltip, Button, Grid } from '@geist-ui/core';

export const Placement = () => {
  return (
    <div style={{ padding: '100px 150px' }}>
      <Grid.Container gap={2} justify="center">
        <Grid>
          <Tooltip text="Top" placement="top">
            <Button auto>Top</Button>
          </Tooltip>
        </Grid>
        <Grid>
          <Tooltip text="Bottom" placement="bottom">
            <Button auto>Bottom</Button>
          </Tooltip>
        </Grid>
        <Grid>
          <Tooltip text="Left" placement="left">
            <Button auto>Left</Button>
          </Tooltip>
        </Grid>
        <Grid>
          <Tooltip text="Right" placement="right">
            <Button auto>Right</Button>
          </Tooltip>
        </Grid>
      </Grid.Container>
      
      <Grid.Container gap={2} justify="center" style={{ marginTop: '20px' }}>
        <Grid>
          <Tooltip text="Top Left" placement="topLeft">
            <Button auto>TL</Button>
          </Tooltip>
        </Grid>
        <Grid>
          <Tooltip text="Bottom Right" placement="bottomRight">
            <Button auto>BR</Button>
          </Tooltip>
        </Grid>
      </Grid.Container>
    </div>
  );
};
Placement.storyName = 'Placements';
