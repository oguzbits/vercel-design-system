import React from 'react';
import { Avatar } from '@geist-ui/core';

export const Group = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Avatar.Group>
        <Avatar src="https://zeit.co/api/www/avatar/?u=evilrabbit&s=160" stacked />
        <Avatar src="https://zeit.co/api/www/avatar/?u=shuding&s=160" stacked />
        <Avatar src="https://zeit.co/api/www/avatar/?u=rauchg&s=160" stacked />
        <Avatar src="https://zeit.co/api/www/avatar/?u=huozhi&s=160" stacked />
      </Avatar.Group>
    </div>
  );
};
Group.storyName = 'Stacked Group';
