import React, { useState } from 'react';
import { Spacer, Code } from '@geist-ui/core';
import { Radio } from '@/components/ui/Radio';

export const Basic = {
  tags: ['!sidebar'],
  render: () => <Radio checked={false}>Option 1</Radio>
};

export const Group = {
  tags: ['!sidebar'],
  render: () => {
    const [state, setState] = useState('1');
    const handler = (val: string | number) => {
      setState(val.toString());
      console.log(val);
    };
    return (
      <Radio.Group value={state} onChange={handler}>
        <Radio value="1">Option 1</Radio>
        <Radio value="2">Option 2</Radio>
      </Radio.Group>
    );
  }
};

export const Type = {
  tags: ['!sidebar'],
  render: () => (
    <>
      <Radio checked={false} type="default">Default</Radio>
      <Spacer h={0.5} />
      <Radio checked={false} type="success">Success</Radio>
      <Spacer h={0.5} />
      <Radio checked={false} type="warning">Warning</Radio>
      <Spacer h={0.5} />
      <Radio checked={false} type="error">Error</Radio>
    </>
  )
};

export const Description = {
  tags: ['!sidebar'],
  render: () => (
    <Radio.Group value="1" onChange={val => console.log(val)}>
      <Radio value="1">
        Option 1
        <Radio.Description>Description for Option1</Radio.Description>
      </Radio>
      <Radio value="2">
        Option 2
        <Radio.Desc><Code>Description</Code> for Option2</Radio.Desc>
      </Radio>
    </Radio.Group>
  )
};

export const Disabled = {
  tags: ['!sidebar'],
  render: () => (
    <Radio.Group value="1" disabled>
      <Radio value="1">Option 1</Radio>
      <Radio value="2">Option 2</Radio>
    </Radio.Group>
  )
};

export const Row = {
  tags: ['!sidebar'],
  render: () => (
    <Radio.Group value="1" useRow>
      <Radio value="1">
        Option 1
        <Radio.Desc>Description for Option1</Radio.Desc>
      </Radio>
      <Radio value="2">
        Option 2
        <Radio.Desc>Description for Option2</Radio.Desc>
      </Radio>
    </Radio.Group>
  )
};
