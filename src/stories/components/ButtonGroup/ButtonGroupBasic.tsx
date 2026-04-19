import React from 'react';
import { Button, ButtonGroup, Spacer } from '@/components/ui';

export const Basic = {
  tags: ['!sidebar'],
  render: () => (
    <ButtonGroup>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  )
};

export const Variant = {
  tags: ['!sidebar'],
  render: () => (
    <>
      <ButtonGroup type="success">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <Spacer />
      <ButtonGroup type="abort">
        <Button>Action1</Button>
        <Button>Action2</Button>
      </ButtonGroup>
      <Spacer />
      <ButtonGroup type="warning" ghost>
        <Button>Action1</Button>
        <Button>Action2</Button>
      </ButtonGroup>
      <Spacer />
      <ButtonGroup type="success-light">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </>
  )
};

export const Sizes = {
  tags: ['!sidebar'],
  render: () => (
    <>
      <ButtonGroup scale={2/3}>
        <Button scale={2/3}>One</Button>
        <Button scale={2/3}>Two</Button>
        <Button scale={2/3}>Three</Button>
      </ButtonGroup>
      <Spacer />
      <ButtonGroup scale={1/3}>
        <Button scale={1/3}>Action1</Button>
        <Button scale={1/3}>Action2</Button>
      </ButtonGroup>
    </>
  )
};

export const Vertical = {
  tags: ['!sidebar'],
  render: () => (
    <ButtonGroup vertical>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
      <Button>Four</Button>
    </ButtonGroup>
  )
};

export const Disabled = {
  tags: ['!sidebar'],
  render: () => (
    <ButtonGroup scale={0.5} disabled>
      <Button scale={0.5}>One</Button>
      <Button scale={0.5}>Two</Button>
      <Button scale={0.5}>Three</Button>
    </ButtonGroup>
  )
};
