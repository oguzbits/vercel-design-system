import React from 'react';
import { Tooltip, Spacer, Button, Link, Badge, Grid } from '@geist-ui/core';

export const Basic = {
  tags: ['!sidebar'],
  render: () => <Tooltip text={'The compiler tools'}>Tooltip</Tooltip>
};

export const Types = {
  tags: ['!sidebar'],
  render: () => (
    <Grid.Container gap={2}>
      <Grid><Tooltip text={'The compiler tools'} type="success">Success</Tooltip></Grid>
      <Grid><Tooltip text={'The compiler tools'} type="warning">Warning</Tooltip></Grid>
      <Grid><Tooltip text={'The compiler tools'} type="error">Error</Tooltip></Grid>
      <Grid><Tooltip text={'The compiler tools'} type="secondary">Secondary</Tooltip></Grid>
      <Grid><Tooltip text={'The compiler tools'} type="dark">Dark</Tooltip></Grid>
      <Grid><Tooltip text={'The compiler tools'} type="lite">Lite</Tooltip></Grid>
    </Grid.Container>
  )
};

export const Placement = {
  tags: ['!sidebar'],
  render: () => (
    <Grid.Container gap={2} justify="center" style={{ padding: '40px 0' }}>
      <Grid xs={4}><Tooltip text={'The compiler tools'} placement="topStart">topStart</Tooltip></Grid>
      <Grid xs={4}><Tooltip text={'The compiler tools'} placement="top">top</Tooltip></Grid>
      <Grid xs={4}><Tooltip text={'The compiler tools'} placement="topEnd">topEnd</Tooltip></Grid>
      <Grid xs={4}><Tooltip text={'The compiler tools'} placement="leftStart">leftStart</Tooltip></Grid>
      <Grid xs={4}></Grid>
      <Grid xs={4}><Tooltip text={'The compiler tools'} placement="rightStart">rightStart</Tooltip></Grid>
      <Grid xs={4}><Tooltip text={'The compiler tools'} placement="left">left</Tooltip></Grid>
      <Grid xs={4}></Grid>
      <Grid xs={4}><Tooltip text={'The compiler tools'} placement="right">right</Tooltip></Grid>
      <Grid xs={4}><Tooltip text={'The compiler tools'} placement="leftEnd">leftEnd</Tooltip></Grid>
      <Grid xs={4}></Grid>
      <Grid xs={4}><Tooltip text={'The compiler tools'} placement="rightEnd">rightEnd</Tooltip></Grid>
      <Grid xs={4}><Tooltip text={'The compiler tools'} placement="bottomStart">bottomStart</Tooltip></Grid>
      <Grid xs={4}><Tooltip text={'The compiler tools'} placement="bottom">bottom</Tooltip></Grid>
      <Grid xs={4}><Tooltip text={'The compiler tools'} placement="bottomEnd">bottomEnd</Tooltip></Grid>
    </Grid.Container>
  )
};

export const CustomContent = {
  tags: ['!sidebar'],
  render: () => (
    <div style={{ display: 'flex', gap: '20px' }}>
      <Tooltip text={
        <>
          <p>This is a <b>custom</b> content.</p>
          <p>You can use any components here.</p>
        </>
      }>
        <Button auto scale={0.5}>Custom Content</Button>
      </Tooltip>
    </div>
  )
};
