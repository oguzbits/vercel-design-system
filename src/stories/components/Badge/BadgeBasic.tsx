import React from 'react';
import { Badge, Spacer, Avatar, Button } from '@geist-ui/core';

export const Basic = {
  tags: ['!sidebar'],
  render: () => (
    <>
      <Badge>1</Badge> <Spacer h={0.5} />
      <Badge>5</Badge> <Spacer h={0.5} />
      <Badge>15</Badge> <Spacer h={0.5} />
      <Badge>99+</Badge>
    </>
  )
};

export const Type = {
  tags: ['!sidebar'],
  render: () => (
    <>
      <Badge type="success">Success</Badge> <Spacer h={0.5} />
      <Badge type="warning">Warning</Badge> <Spacer h={0.5} />
      <Badge type="error">Error</Badge> <Spacer h={0.5} />
      <Badge type="secondary">Secondary</Badge>
    </>
  )
};

export const Anchor = {
  tags: ['!sidebar'],
  render: () => (
    <>
      <Badge.Anchor>
        <Badge scale={0.5}>10</Badge>
        <Avatar src="https://geist-ui.dev/images/avatar.png" />
      </Badge.Anchor>
      <Spacer w={1.5} inline />
      <Badge.Anchor placement="bottomRight">
        <Badge scale={0.5} type="error">99+</Badge>
        <Button auto scale={0.5}>Button</Button>
      </Badge.Anchor>
    </>
  )
};
