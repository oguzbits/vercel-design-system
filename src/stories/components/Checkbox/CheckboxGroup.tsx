import React, { useState } from 'react';
import { Checkbox, Text, Spacer } from '@geist-ui/core';

export const Group = () => {
  const [value, setValue] = useState(['sydney']);
  const handler = (val: string[]) => {
    setValue(val);
  };

  return (
    <div>
      <Text h4>Location Selection</Text>
      <Checkbox.Group value={value} onChange={handler}>
        <Checkbox value="sydney">Sydney</Checkbox>
        <Checkbox value="beijing">Beijing</Checkbox>
        <Checkbox value="london">London</Checkbox>
        <Checkbox value="tokyo" disabled>Tokyo (Occupied)</Checkbox>
      </Checkbox.Group>
      <Spacer h={1} />
      <Text font="14px" color="#666">Selected values: <b>{JSON.stringify(value)}</b></Text>
    </div>
  );
};
Group.storyName = 'Selection Group';
