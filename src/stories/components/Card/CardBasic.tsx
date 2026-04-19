import React from 'react';
import { Card, Text, Grid, Link, Spacer, Image, Divider, Code } from '@geist-ui/core';

export const Basic = {
  tags: ['!sidebar'],
  render: () => (
    <Card>
      <p>A basic card.</p>
    </Card>
  )
};

export const Hoverable = {
  tags: ['!sidebar'],
  render: () => (
    <Card hoverable>
      <p>hoverable card.</p>
    </Card>
  )
};

export const Shadow = {
  tags: ['!sidebar'],
  render: () => (
    <Card shadow>
      <Text h4 my={0}>HTTP is extensible</Text>
      <Text>Introduced in HTTP/1.0, HTTP headers make this protocol easy to extend and experiment with. New functionality can even be introduced by a simple agreement between a client and a server about a new header's semantics.</Text>
    </Card>
  )
};

export const Types = {
  tags: ['!sidebar'],
  render: () => {
    const types = ['secondary', 'success', 'warning', 'error', 'dark', 'alert', 'purple', 'violet', 'cyan'] as const;
    return (
      <Grid.Container gap={1.5}>
        {types.map(type => (
          <Grid xs={8} key={type}>
            <Card type={type} width="100%">
              <Text h4 my={0} style={{ textTransform: 'uppercase' }}>{type}</Text>
              <Text>{type}</Text>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    )
  }
};

export const WithFooter = {
  tags: ['!sidebar'],
  render: () => (
    <Grid.Container gap={1.5}>
      <Grid xs={12} justify="center">
        <Card width="100%">
          <Text h4 my={0}>Geist UI React</Text>
          <Text>Modern and minimalist React UI library.</Text>
          <Card.Footer>
            <Link color target="_blank" href="https://github.com/geist-org/geist-ui">Visit source code on GitHub.</Link>
          </Card.Footer>
        </Card>
      </Grid>
      <Grid xs={12} justify="center">
        <Card width="100%" type="dark">
          <Text h4 my={0}>Geist UI React</Text>
          <Text>Modern and minimalist React UI library.</Text>
          <Card.Footer>
            <Link target="_blank" href="https://github.com/geist-org/geist-ui">Visit source code on GitHub.</Link>
          </Card.Footer>
        </Card>
      </Grid>
    </Grid.Container>
  )
};

export const WithImage = {
  tags: ['!sidebar'],
  render: () => (
    <Card width="400px">
      <Image src="https://user-images.githubusercontent.com/11304944/76085431-fd036480-5fec-11ea-8412-9e581425344a.png"
       height="200px" width="400px" draggable={false} />
      <Text h4 mb={0}>Geist UI React</Text>
      <Text type="secondary" small>Modern and minimalist React UI library.</Text>
      <Card.Footer>
        <Link block target="_blank" href="https://github.com/geist-org/geist-ui">Visit source code on GitHub.</Link>
      </Card.Footer>
    </Card>
  )
};

export const WithDivider = {
  tags: ['!sidebar'],
  render: () => (
    <Card width="400px">
      <Card.Content>
        <Text b my={0}>Description</Text>
      </Card.Content>
      <Divider h="1px" my={0} />
      <Card.Content>
        <Text>The Object constructor creates an object wrapper for the given value.</Text>
        <Text>When called in a non-constructor context, Object behaves identically to <Code>new Object()</Code>.</Text>
      </Card.Content>
    </Card>
  )
};
