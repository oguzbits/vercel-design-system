import React from 'react';
import { Checkbox, Spacer } from '@/components/ui';

export const Basic = {
  tags: ['!sidebar'],
  render: () => (
    <Checkbox checked={true}>Sydney</Checkbox>
  )
};

export const Sizes = {
  tags: ['!sidebar'],
  render: () => (
    <>
      <Checkbox mr="15px" checked={true} scale={0.25}>scale-0.25</Checkbox>
      <Checkbox mr="15px" checked={true} scale={0.5}>scale-0.5</Checkbox>
      <Checkbox mr="15px" checked={true} scale={0.75}>scale-0.75</Checkbox>
    </>
  )
};

export const Type = {
  tags: ['!sidebar'],
  render: () => (
    <>
      <Checkbox checked={true} type="default">Default</Checkbox>
      <Spacer h={0.5} />
      <Checkbox checked={true} type="success">Success</Checkbox>
      <Spacer h={0.5} />
      <Checkbox checked={true} type="warning">Warning</Checkbox>
      <Spacer h={0.5} />
      <Checkbox checked={true} type="error">Error</Checkbox>
    </>
  )
};

export const Disabled = {
  tags: ['!sidebar'],
  render: () => (
    <>
      <Checkbox>Sydney</Checkbox>
      <Spacer h={0.5} />
      <Checkbox disabled checked={true}>Bei Jing</Checkbox>
    </>
  )
};

export const Group = {
  tags: ['!sidebar'],
  render: () => {
    const [value, setValue] = React.useState(['sydney']);
    const handler = (val: string[]) => {
      setValue(val);
      console.log(val);
    };
    return (
      <Checkbox.Group value={value} onChange={handler}>
        <Checkbox value="sydney">Sydney</Checkbox>
        <Checkbox value="beijing">Bei Jing</Checkbox>
        <Checkbox value="london">London</Checkbox>
        <Checkbox value="tokyo">Tokyo</Checkbox>
      </Checkbox.Group>
    );
  }
};
