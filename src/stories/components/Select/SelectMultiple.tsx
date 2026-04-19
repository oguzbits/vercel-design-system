import React from 'react';
import { Select } from '@geist-ui/core';

export const Multiple = () => {
  return (
    <div style={{ maxWidth: '400px' }}>
      <Select placeholder="Choose multiple" multiple width="100%" initialValue={['1', '2']}>
        <Select.Option value="1">Framework Next.js</Select.Option>
        <Select.Option value="2">Framework React</Select.Option>
        <Select.Option value="3">Framework Vue</Select.Option>
        <Select.Option value="4">Framework Svelte</Select.Option>
      </Select>
    </div>
  );
};
Multiple.storyName = 'Multiple Selection';
