import React from 'react';
import { Button, Grid, Spacer } from '@geist-ui/core';
import { User, Shield, Github } from '@geist-ui/icons';
import type { StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  tags: ['!sidebar'],
  render: () => <Button>Action</Button>
};

export const Loading: Story = {
  tags: ['!sidebar'],
  render: () => (
    <Grid.Container gap={1.5}>
      <Grid><Button loading>Action</Button></Grid>
      <Grid><Button loading scale={0.75}>Action</Button></Grid>
      <Grid><Button loading auto type="success" scale={2/3}>Action</Button></Grid>
    </Grid.Container>
  )
};

export const Types: Story = {
  tags: ['!sidebar'],
  render: () => (
    <Grid.Container gap={1.5}>
      <Grid><Button auto type="secondary">Secondary</Button></Grid>
      <Grid><Button auto type="success">Success</Button></Grid>
      <Grid><Button auto type="warning">Warning</Button></Grid>
      <Grid><Button auto type="error">Error</Button></Grid>
      <Grid><Button auto type="abort">Abort</Button></Grid>
      <Grid><Button auto type="secondary-light">Secondary Light</Button></Grid>
      <Grid><Button auto type="success-light">Success Light</Button></Grid>
      <Grid><Button auto type="warning-light">Warning Light</Button></Grid>
      <Grid><Button auto type="error-light">Error Light</Button></Grid>
    </Grid.Container>
  )
};

export const Ghost: Story = {
  tags: ['!sidebar'],
  render: () => (
    <Grid.Container gap={1.5}>
      <Grid><Button type="secondary" ghost auto scale={0.7}>Secondary</Button></Grid>
      <Grid><Button type="success" ghost auto scale={0.7}>Success</Button></Grid>
      <Grid><Button type="warning" ghost auto scale={0.7}>Warning</Button></Grid>
      <Grid><Button type="error" ghost auto scale={0.7}>Error</Button></Grid>
    </Grid.Container>
  )
};

export const Disabled: Story = {
  tags: ['!sidebar'],
  render: () => <Button disabled>Action</Button>
};

export const Icons: Story = {
  tags: ['!sidebar'],
  render: () => (
    <Grid.Container gap={1.5}>
      <Grid><Button icon={<User />} auto>With Icon</Button></Grid>
      <Grid><Button icon={<Shield />} type="success" auto /></Grid>
      <Grid><Button iconRight={<Github />} auto>Icon Right</Button></Grid>
    </Grid.Container>
  )
};

export const Sizes: Story = {
  tags: ['!sidebar'],
  render: () => (
    <Grid.Container gap={1.5} alignItems="center">
      <Grid><Button scale={0.5}>Mini</Button></Grid>
      <Grid><Button scale={0.8}>Small</Button></Grid>
      <Grid><Button>Medium</Button></Grid>
      <Grid><Button scale={1.25}>Large</Button></Grid>
      <Grid><Button scale={1.5}>X-Large</Button></Grid>
    </Grid.Container>
  )
};
