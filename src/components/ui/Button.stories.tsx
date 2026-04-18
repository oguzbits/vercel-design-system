import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'secondary', 'success', 'warning', 'error', 'abort'],
    },
    shadow: { control: 'boolean' },
    ghost: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: 'Geist Button',
    type: 'default',
  },
};

export const Success: Story = {
  args: {
    label: 'Success Button',
    type: 'success',
  },
};

export const Shadow: Story = {
  args: {
    label: 'Shadow Button',
    type: 'default',
    shadow: true,
  },
};
