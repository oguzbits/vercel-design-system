import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../../../components/ui/Text';
import React from 'react';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  render: () => (
    <div>
      <Text h1>Heading 1</Text>
      <Text h2>Heading 2</Text>
      <Text h3>Heading 3</Text>
      <Text p>
        Geist UI is a React component library based on **Vercel's Design System**.
      </Text>
      <Text small>This is small text.</Text>
      <Text blockquote>This is a blockquote.</Text>
    </div>
  ),
};

export const Types: Story = {
  render: () => (
    <div>
      <Text type="success">Success Text</Text>
      <Text type="warning">Warning Text</Text>
      <Text type="error">Error Text</Text>
      <Text type="secondary">Secondary Text</Text>
    </div>
  ),
};
