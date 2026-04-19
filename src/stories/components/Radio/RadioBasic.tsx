import React from 'react';
import { Radio, Grid, Spacer } from '@geist-ui/core';

export const Basic = () => (
  <Radio.Group value="1">
    <Radio value="1">Option 1</Radio>
    <Radio value="2">Option 2</Radio>
    <Radio value="3" disabled>Disabled</Radio>
  </Radio.Group>
);

export const Descriptions = () => (
  <Radio.Group value="1" width="400px">
    <Radio value="1">
      Option 1
      <Radio.Description>Description for option 1.</Radio.Description>
    </Radio>
    <Radio value="2">
      Option 2
      <Radio.Description>Description for option 2.</Radio.Description>
    </Radio>
  </Radio.Group>
);

export const Row = () => (
  <Radio.Group value="1" useRow>
    <Radio value="1">Option 1</Radio>
    <Radio value="2">Option 2</Radio>
    <Radio value="3">Option 3</Radio>
  </Radio.Group>
);
