import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Buttons allow users to take actions, and make choices, with a single tap. They are primarily used for critical actions in forms and secondary navigation.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'secondary', 'success', 'warning', 'error', 'abort'],
      description: 'The semantic type of the button',
    },
    shadow: { 
      control: 'boolean',
      description: 'Whether the button has a shadow effect',
    },
    ghost: { 
      control: 'boolean',
      description: 'Transparent background with border',
    },
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
