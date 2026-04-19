import React from 'react';
import { Select, Spacer } from '@geist-ui/core';

export const Type = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '200px' }}>
      <Select type="default" placeholder="Default">
        <Select.Option value="1">Option 1</Select.Option>
      </Select>
      <Select type="success" placeholder="Success">
        <Select.Option value="1">Option 1</Select.Option>
      </Select>
      <Select type="warning" placeholder="Warning">
        <Select.Option value="1">Option 1</Select.Option>
      </Select>
      <Select type="error" placeholder="Error">
        <Select.Option value="1">Option 1</Select.Option>
      </Select>
    </div>
  );
};
Type.storyName = 'Status Colors';
