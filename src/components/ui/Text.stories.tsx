import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';
import React from 'react';

const meta: Meta<typeof Text> = {
  title: 'UI/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'secondary', 'success', 'warning', 'error'],
    },
    h1: { control: 'boolean' },
    h2: { control: 'boolean' },
    h3: { control: 'boolean' },
    p: { control: 'boolean' },
    b: { control: 'boolean' },
    small: { control: 'boolean' },
    blockquote: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Headings: Story = {
  render: () => (
    <>
      <Text h1>Heading 1</Text>
      <Text h2>Heading 2</Text>
      <Text h3>Heading 3</Text>
      <Text h4>Heading 4</Text>
    </>
  ),
};

export const Paragraphs: Story = {
  args: {
    p: true,
    children: 'This is a standard paragraph using the Geist design system. It maintains consistent spacing and font rendering across all modern browsers.',
  },
};

export const SemanticTypes: Story = {
  render: () => (
    <>
      <Text>Default Text</Text>
      <Text type="secondary">Secondary Text</Text>
      <Text type="success">Success Text</Text>
      <Text type="warning">Warning Text</Text>
      <Text type="error">Error Text</Text>
    </>
  ),
};

export const Composed: Story = {
  render: () => (
    <div>
      <Text h2>Start our Geist journey.</Text>
      <Text p b>Bold Paragraph</Text>
      <Text p type="secondary">
        Secondary paragraph text providing additional context or metadata for the user interface.
      </Text>
      <Text blockquote>
        Send cookies from the server to the user-agent.
      </Text>
    </div>
  ),
};
