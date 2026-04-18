import type { Meta, StoryObj } from '@storybook/react';
import { Snippet } from './Snippet';
import React from 'react';
import { Spacer } from './Spacer';

const meta: Meta<typeof Snippet> = {
  title: 'Components/Utils',
  component: Snippet,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'secondary', 'success', 'warning', 'error', 'dark', 'lite'],
    },
    symbol: { control: 'text' },
    copy: { control: 'select', options: ['default', 'silent', 'prevent'] },
  },
};

export default meta;
type Story = StoryObj<typeof Snippet>;

export const Default: Story = {
  args: {
    text: 'bun create next-app .',
    width: '300px',
  },
};

export const Types: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Snippet text="bun add @geist-ui/core" type="dark" width="350px" />
      <Snippet text="bun add @geist-ui/core" type="secondary" width="350px" />
      <Snippet text="bun add @geist-ui/core" type="success" width="350px" />
      <Snippet text="bun add @geist-ui/core" type="warning" width="350px" />
      <Snippet text="bun add @geist-ui/core" type="error" width="350px" />
    </div>
  ),
};

export const CustomSymbol: Story = {
  args: {
    text: 'git commit -m "Initial commit"',
    symbol: 'λ',
    width: '350px',
  },
};
