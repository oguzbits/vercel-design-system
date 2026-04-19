import React from 'react';
import { Textarea, Spacer, useInput, Button } from '@/components/ui';

export const Basic = {
  tags: ['!sidebar'],
  render: () => <Textarea placeholder="Please enter some text." />
};

export const Width = {
  tags: ['!sidebar'],
  render: () => <Textarea width="100%" placeholder="Please enter some text." />
};

export const Types = {
  tags: ['!sidebar'],
  render: () => (
    <>
      <Textarea type="success" placeholder="Success" />
      <Spacer h={0.5} />
      <Textarea type="secondary" placeholder="Secondary" />
      <Spacer h={0.5} />
      <Textarea type="warning" placeholder="Warning" />
      <Spacer h={0.5} />
      <Textarea type="error" placeholder="Error" />
    </>
  )
};

export const Status = {
  tags: ['!sidebar'],
  render: () => (
    <>
      <Textarea disabled placeholder="Disabled" />
      <Spacer h={0.5} />
      <Textarea readOnly initialValue="Read Only" />
    </>
  )
};

export const Command = {
  tags: ['!sidebar'],
  render: () => {
    const { state, setState, bindings } = useInput('The world is standardizing on Geist.');
    return (
      <>
        <Textarea width="100%" {...bindings} />
        <Spacer h={0.5} />
        <Button auto type="secondary" scale={0.5} onClick={() => setState('The world is standardizing on Geist.')}>Reset</Button>
      </>
    );
  }
};
