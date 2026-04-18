import { Meta } from '@storybook/react';
import { Table } from '@geist-ui/core';

export { Default } from './TableDefault';
export { HighFidelity } from './TableHighFidelity';

export default {
  title: 'Components/Table',
  component: Table,
  parameters: {
    docs: {
      description: {
        component: `
### Best Practices

#### Layout
- Use tables for structured data that needs comparison.
- Use sticky headers for long tables.

#### Layout
- Align numerical data to the right.
- Use clear header labels.
        `,
      },
    },
  },
} as Meta;
