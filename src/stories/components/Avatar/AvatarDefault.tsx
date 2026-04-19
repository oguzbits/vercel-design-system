import React from 'react';
import { Avatar, Spacer } from '@geist-ui/core';

export const Default = () => {
  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px', alignItems: 'center' }}>
      <Avatar src="https://zeit.co/api/www/avatar/?u=evilrabbit&s=160" />
      <Avatar src="https://zeit.co/api/www/avatar/?u=shuding&s=160" />
      <Avatar src="https://zeit.co/api/www/avatar/?u=rauchg&s=160" />
      <Spacer />
      <Avatar isSquare src="https://zeit.co/api/www/avatar/?u=evilrabbit&s=160" />
    </div>
  );
};
Default.storyName = 'Default';
