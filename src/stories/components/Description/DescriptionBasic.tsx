import React from 'react';
import { Description, Code } from '@geist-ui/core';

export const Basic = {
  tags: ['!sidebar'],
  render: () => <Description title="Section Title" content="Data about this section." />
};

export const WithComponent = {
  tags: ['!sidebar'],
  render: () => <Description title="Section Title" content={<p><Code>code</Code> about this section.</p>} />
};
