import type { Meta, StoryObj } from '@storybook/react';
import { Input, PasswordInput } from './Input';
import React from 'react';
import { Spacer } from './Spacer';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['default', 'secondary', 'success', 'warning', 'error'],
    },
    scale: { control: 'number' },
    disabled: { control: 'boolean' },
    clearable: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your username',
  },
};

export const Password: Story = {
  render: () => <PasswordInput placeholder="Enter your password" />,
};

export const Statuses: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Input status="success" placeholder="Success" />
      <Input status="warning" placeholder="Warning" />
      <Input status="error" placeholder="Error" />
    </div>
  ),
};

export const WithLabels: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Input label="Username" placeholder="oguz" />
      <Input labelRight=".com" placeholder="vercel" />
    </div>
  ),
};
