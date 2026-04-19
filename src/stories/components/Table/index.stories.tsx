import { Meta } from '@storybook/react';
import { Table } from '@geist-ui/core';

export { Default } from './TableDefault';
export { HighFidelity } from './TableHighFidelity';
export { EmptyState } from './TableEmptyState';

export default {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Best Practices

#### Usage
- **Do** use tables for comparing structured data across multiple dimensions.
- **Do** use clear, concise column headers.
- **Do** align numerical data to the right for easier comparison.
- **Don't** use tables for simple lists or layout purposes; use List or Grid instead.

#### Interaction
- **Do** provide an explicit empty state message when no data is returned.
- **Do** use pagination or virtualization for datasets exceeding 50 rows.
- **Do** enable row selection ONLY if the user needs to perform bulk actions.

### Accessibility
- Tables are rendered with standard semantic HTML \`<table>\`, \`<th>\`, and \`<td>\` tags.
- Use the \`label\` prop on \`Table.Column\` to ensure correct header association.
- If the table is complex, ensure the column headers are descriptive enough for screen readers.
        `,
      },
    },
  },
} as Meta;
