import React, { useState } from 'react';
import { Radio, Text, Spacer } from '@geist-ui/core';

export const Group = () => {
  const [v, setV] = useState(1);
  const handler = val => setV(val);
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      <div>
        <Text h4>Vertical Group (Default)</Text>
        <Radio.Group value={v} onChange={handler}>
          <Radio value={1}>Option 1</Radio>
          <Radio value={2}>Option 2</Radio>
          <Radio value={3}>Option 3</Radio>
        </Radio.Group>
      </div>

      <div>
        <Text h4>Horizontal Group (Row)</Text>
        <Radio.Group value={v} onChange={handler} useRow>
          <Radio value={1}>Option 1</Radio>
          <Radio value={2}>Option 2</Radio>
          <Radio value={3}>Option 3</Radio>
        </Radio.Group>
      </div>
      
      <Text font="14px" color="#666">Selected: <b>Option {v}</b></Text>
    </div>
  );
};
Group.storyName = 'Selection Group';
