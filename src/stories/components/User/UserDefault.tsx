import React from 'react';
import { User, Link } from '@geist-ui/core';

export const Default = () => {
  return (
    <div style={{ padding: '20px' }}>
      <User src="https://zeit.co/api/www/avatar/?u=evilrabbit&s=160" name="Evil Rabbit">
        <Link href="https://twitter.com/evilrabbit" target="_blank" rel="noopener" block>@evilrabbit</Link>
      </User>
    </div>
  );
};
Default.storyName = 'Default';
