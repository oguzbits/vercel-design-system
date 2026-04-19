import React from 'react';
import { Select } from '@geist-ui/core';

export const Default = () => {
  return (
    <div style={{ maxWidth: '200px' }}>
      <Select placeholder="Choose an option">
        <Select.Option value="1">Option 1</Select.Option>
        <Select.Option value="2">Option 2</Select.Option>
        <Select.Option value="3">Option 3</Select.Option>
      </Select>
    </div>
  );
};
Default.storyName = 'Default';
