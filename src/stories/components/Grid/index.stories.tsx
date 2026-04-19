import { Meta } from '@storybook/react';
import { Grid } from '@geist-ui/core';

export { Default } from './GridDefault';
export { Responsive } from './GridResponsive';

export default {
  title: 'Components/Grid',
  component: Grid,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Best Practices

#### Usage
- **Do** use \`Grid.Container\` to wrap a set of \`Grid\` items and manage gaps and alignment.
- **Do** leverage the 24-column system for granular control over element widths.
- **Do** use responsive props (\`xs\`, \`sm\`, \`md\`, \`lg\`, \`xl\`) to ensure your layout adapts perfectly to different devices.
- **Don't** nest \`Grid.Container\` inside another \`Grid.Container\` unless necessary for complex nested layouts; it can lead to confusing alignment issues.

#### Layout
- **Do** use the \`gap\` prop to maintain consistent whitespace between elements.
- **Do** use \`justify\` and \`alignItems\` to control the positioning of items within the container.
- **Don't** rely on hardcoded magic numbers for margins or widths; use the grid system's relative units.

### Accessibility
- Grids should follow a logical tab order that matches the visual layout.
- Use semantic HTML within grid items (headings, buttons, etc.) to ensure screen readers can navigate effectively.
- Ensure that the responsive behavior doesn't hide critical content on smaller screens unless it's truly redundant.
- Use \`aria-label\` on the grid container if it serves a specific functional purpose (e.g., a "Product Gallery").
- Background colors or patterns used within grid items should have sufficient contrast with the overlapping text.
        `,
      },
    },
  },
} as Meta;
