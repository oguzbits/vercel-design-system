import React from 'react';
import { Toggle, Spacer, ToggleEvent } from '@geist-ui/core';

export const Basic = {
  tags: ['!sidebar'],
  render: () => (
    <>
      <Toggle />
      <Spacer h={0.5} />
      <Toggle initialChecked />
    </>
  )
};

export const Type = {
  tags: ['!sidebar'],
  render: () => (
    <>
      <Toggle type="default" initialChecked />
      <Spacer h={0.5} />
      <Toggle type="secondary" initialChecked />
      <Spacer h={0.5} />
      <Toggle type="success" initialChecked />
      <Spacer h={0.5} />
      <Toggle type="warning" initialChecked />
      <Spacer h={0.5} />
      <Toggle type="error" initialChecked />
    </>
  )
};

export const Disabled = {
  tags: ['!sidebar'],
  render: () => (
    <>
      <Toggle disabled />
      <Spacer h={0.5} />
      <Toggle initialChecked disabled />
    </>
  )
};

export const GetChange = {
  tags: ['!sidebar'],
  render: () => {
    const handler = (event: ToggleEvent) => {
      console.log(event.target.checked);
    };
    return <Toggle onChange={handler} />;
  }
};
