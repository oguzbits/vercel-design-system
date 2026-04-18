import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Card, CardContent, CardFooter } from './Card';
import { Text } from './Text';

const meta: Meta<typeof Card> = {
  title: 'Components/Surfaces',
  component: Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card>
      <CardContent>
        <Text h4>Standard Card</Text>
        <Text p>This is a basic card component without any additional styling.</Text>
      </CardContent>
    </Card>
  ),
};

export const Shadow: Story = {
  render: () => (
    <Card shadow>
      <CardContent>
        <Text h4>Shadow Card</Text>
        <Text p>This card features a soft shadow for depth.</Text>
      </CardContent>
    </Card>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Card shadow width="400px">
      <CardContent>
        <Text h4>Card with Footer</Text>
        <Text p>Footers are perfect for secondary actions or metadata.</Text>
      </CardContent>
      <CardFooter>
        <Text small secondary>Last updated: 2 mins ago</Text>
      </CardFooter>
    </Card>
  ),
};
