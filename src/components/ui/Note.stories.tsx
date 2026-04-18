import type { Meta, StoryObj } from '@storybook/react';
import { Note } from './Note';
import React from 'react';

const meta: Meta<typeof Note> = {
  title: 'UI/Note',
  component: Note,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'secondary', 'success', 'warning', 'error'],
    },
    label: { control: 'text' },
    filled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Note>;

export const Default: Story = {
  args: {
    children: 'This is a standard note.',
  },
};

export const Filled: Story = {
  args: {
    children: 'This is a filled success note.',
    type: 'success',
    filled: true,
  },
};

export const Types: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Note type="secondary">This is a secondary note.</Note>
      <Note type="success">Operation completed successfully.</Note>
      <Note type="warning">Please review your billing information.</Note>
      <Note type="error">An unexpected error occurred.</Note>
    </div>
  ),
};
