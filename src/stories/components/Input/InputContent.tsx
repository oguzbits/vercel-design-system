import React from 'react';
import { Input } from '@geist-ui/core';
import { Mail, Shield, User } from '@geist-ui/icons';

export const Content = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Input icon={<User />} placeholder="Username" />
      <Input icon={<Mail />} placeholder="Email address" />
      <Input iconRight={<Shield />} placeholder="Secure key" />
      <Input label="Label" placeholder="With Label" />
      <Input labelRight="Right Label" placeholder="With Right Label" />
    </div>
  );
};
Content.storyName = 'Icons & Labels';
