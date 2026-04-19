import React from 'react';
import { Radio, Text } from '@geist-ui/core';

export const Description = () => {
  return (
    <div style={{ maxWidth: '400px' }}>
      <Text h4>Enhanced Selections</Text>
      <Radio.Group value="1">
        <Radio value="1">
          Standard Plan
          <Radio.Description>Basic features for personal use.</Radio.Description>
        </Radio>
        <Radio value="2">
          Pro Plan
          <Radio.Description>Advanced metrics and team colaboration tools.</Radio.Description>
        </Radio>
        <Radio value="3" disabled>
          Enterprise
          <Radio.Description>Contact sales for custom limits and support.</Radio.Description>
        </Radio>
      </Radio.Group>
    </div>
  );
};
Description.storyName = 'With Description';
