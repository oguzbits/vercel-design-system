import type { Meta, StoryObj } from '@storybook/react';
import { Snippet } from '../../../components/ui/Snippet';
import React from 'react';

const meta: Meta<typeof Snippet> = {
  title: 'Components/Snippet',
  component: Snippet,
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'secondary', 'success', 'warning', 'error', 'dark', 'lite'],
    },
    symbol: { control: 'text' },
    width: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Snippet>;

export const Default: Story = {
  args: {
    text: 'npm i @geist-ui/core',
    width: '300px',
  },
};

export const MultiLine: Story = {
  args: {
    text: ['cd my-project', 'npm install', 'npm run dev'],
    width: '300px',
  },
};

export const Types: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Snippet text="npm i @geist-ui/core" type="success" width="300px" />
      <Snippet text="npm i @geist-ui/core" type="warning" width="300px" />
      <Snippet text="npm i @geist-ui/core" type="error" width="300px" />
      <Snippet text="npm i @geist-ui/core" type="dark" width="300px" />
    </div>
  ),
};
