import React from 'react';
import { Avatar, Spacer } from '@geist-ui/core';

export const Basic = {
  tags: ['!sidebar'],
  render: () => {
    const url = '/images/avatar.png';
    return (
      <>
        <Avatar src={url} />
        <Avatar src={url} />
        <Avatar src={url} />
        <Avatar src={url} />
        <Spacer h={0.5} />
        <Avatar src={url} isSquare />
        <Avatar src={url} isSquare />
        <Avatar src={url} isSquare />
        <Avatar src={url} isSquare />
      </>
    );
  }
};

export const Text = {
  tags: ['!sidebar'],
  render: () => (
    <>
      <Avatar text="W" />
      <Avatar text="A" />
      <Avatar text="W" />
      <Avatar text="Joe" />
    </>
  )
};

export const Group = {
  tags: ['!sidebar'],
  render: () => {
    const url = '/images/avatar.png';
    return (
      <>
        <Avatar.Group>
          <Avatar src={url} stacked />
          <Avatar src={url} stacked />
          <Avatar src={url} stacked />
          <Avatar src={url} stacked />
        </Avatar.Group>
        <Spacer h={1} />
        <Avatar.Group count={12}>
          <Avatar src={url} stacked />
          <Avatar text="W" stacked />
          <Avatar text="Ana" stacked />
        </Avatar.Group>
      </>
    );
  }
};
