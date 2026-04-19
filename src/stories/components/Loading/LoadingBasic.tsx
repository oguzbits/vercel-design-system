import React from 'react';
import { Loading, Row } from '@geist-ui/core';

export const Basic = {
  tags: ['!sidebar'],
  render: () => <Loading />
};

export const Text = {
  tags: ['!sidebar'],
  render: () => <Loading>Loading</Loading>
};

export const Type = {
  tags: ['!sidebar'],
  render: () => (
    <Row>
       <Loading type="success" />
       <Loading type="warning" />
       <Loading type="error" />
       <Loading type="secondary" />
    </Row>
  )
};

export const Color = {
  tags: ['!sidebar'],
  render: () => <Loading color="red" />
};
