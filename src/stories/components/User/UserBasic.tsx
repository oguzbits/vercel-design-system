import React from 'react';
import { User } from '@geist-ui/core';

export const Basic = {
  tags: ['!sidebar'],
  render: () => <User src="/avatar.png" name="Witt" />
};

export const Description = {
  tags: ['!sidebar'],
  render: () => (
    <User src="https://unix.bio/assets/avatar.png" name="Witt">
      JavaScript engineer
    </User>
  )
};

export const Social = {
  tags: ['!sidebar'],
  render: () => (
    <User src="https://unix.bio/assets/avatar.png" name="Witt">
      <User.Link href="https://twitter.com/echo_witt">@echo_witt</User.Link>
    </User>
  )
};
