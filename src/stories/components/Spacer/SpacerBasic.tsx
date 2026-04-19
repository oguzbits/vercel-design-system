import React from 'react';
import { Spacer, Card, Container } from '@geist-ui/core';

export const Vertical = {
  tags: ['!sidebar'],
  render: () => (
    <Container>
      <Card shadow>
        <span style={{color: '#999'}}>Object Above</span>
      </Card>
      <Spacer h={2} />
      <Card shadow>
        <span style={{color: '#999'}}>Object Below</span>
      </Card>
    </Container>
  )
};

export const Horizontal = {
  tags: ['!sidebar'],
  render: () => (
    <Container style={{ display: 'flex' }}>
      <Card shadow>
        <span style={{color: '#999'}}>Left Component</span>
      </Card>
      <Spacer w={5} />
      <Card shadow>
        <span style={{color: '#999'}}>Right Component</span>
      </Card>
    </Container>
  )
};
