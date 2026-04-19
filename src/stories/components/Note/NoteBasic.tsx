import React from 'react';
import { Note, Spacer } from '@/components/ui';

export const Basic = {
  tags: ['!sidebar'],
  render: () => <Note label={false}>This is a note.</Note>
};

export const Type = {
  tags: ['!sidebar'],
  render: () => (
    <>
      <Note type="secondary" label={false}>This is a secondary note.</Note>
      <Spacer h={0.5} />
      <Note type="success" label={false}>This is a success note.</Note>
      <Spacer h={0.5} />
      <Note type="warning" label={false}>This is a warning note.</Note>
      <Spacer h={0.5} />
      <Note type="error" label={false}>This is an error note.</Note>
    </>
  )
};

export const Label = {
  tags: ['!sidebar'],
  render: () => (
    <>
      <Note label="custom label">This is a note with custom label.</Note>
      <Spacer h={0.5} />
      <Note label={false}>This is a note without label.</Note>
    </>
  )
};

export const Filled = {
  tags: ['!sidebar'],
  render: () => (
    <>
      <Note type="secondary" filled label={false}>This is a filled secondary note.</Note>
      <Spacer h={0.5} />
      <Note type="success" filled label={false}>This is a filled success note.</Note>
      <Spacer h={0.5} />
      <Note type="warning" filled label={false}>This is a filled warning note.</Note>
      <Spacer h={0.5} />
      <Note type="error" filled label={false}>This is a filled error note.</Note>
    </>
  )
};
