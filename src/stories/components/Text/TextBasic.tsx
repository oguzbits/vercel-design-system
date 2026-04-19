import React from 'react';
import { Text, Grid, Spacer } from '@geist-ui/core';
import type { StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Text>;

export const Headings: Story = {
  tags: ['!sidebar'],
  render: () => (
    <>
      <Text h1>Heading 1</Text>
      <Text h2>Heading 2</Text>
      <Text h3>Heading 3</Text>
      <Text h4>Heading 4</Text>
      <Text h5>Heading 5</Text>
      <Text h6>Heading 6</Text>
    </>
  )
};

export const Paragraph: Story = {
  tags: ['!sidebar'],
  render: () => (
    <Text p>
      Geist UI is an elegant and open-source React component library with a focus on minimalist aesthetics and developer experience. 
      It follows Vercel's design language, providing a sleek, monochromatic UI that feels fast and professional.
    </Text>
  )
};

export const Small: Story = {
  tags: ['!sidebar'],
  render: () => <Text small>This is a small text description or secondary label.</Text>
};

export const Blockquote: Story = {
  tags: ['!sidebar'],
  render: () => <Text blockquote>Design is not just what it looks like and feels like. Design is how it works.</Text>
};

export const Types: Story = {
  tags: ['!sidebar'],
  render: () => (
    <Grid.Container gap={1}>
      <Grid xs={12}><Text type="secondary">Secondary text for less emphasis.</Text></Grid>
      <Grid xs={12}><Text type="success">Success: Operation completed successfully.</Text></Grid>
      <Grid xs={12}><Text type="warning">Warning: Please check your configuration.</Text></Grid>
      <Grid xs={12}><Text type="error">Error: Something went wrong.</Text></Grid>
    </Grid.Container>
  )
};

export const Sizes: Story = {
  tags: ['!sidebar'],
  render: () => (
    <>
      <Text font="1.5rem">Custom size: 1.5rem</Text>
      <Text font="12px">Custom size: 12px</Text>
    </>
  )
};

export const Compose: Story = {
  tags: ['!sidebar'],
  render: () => (
    <Text>
      You can <b>compose</b> multiple <i>styles</i> within a <Text type="success" i>single</Text> line of <Text b del>content</Text>.
    </Text>
  )
};
