import { Meta } from '@storybook/react';
import { Tree } from '@geist-ui/core';

export { Default } from './TreeDefault';
export { Imperative } from './TreeImperative';

export default {
  title: 'Components/Tree',
  component: Tree,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Best Practices

#### Usage
- **Do** use \`Tree\` to display data with a clear parent-child relationship (e.g., file systems, sitemaps).
- **Do** use declarative sub-components (\`Tree.Folder\`, \`Tree.File\`) for static structures to improve readability.
- **Do** use the \`value\` prop for dynamic data or architectures retrieved from an API.
- **Don't** use a tree for shallow lists; breadcrumbs or simple lists are often better for flat hierarchies.

#### Interaction
- **Do** use \`initialExpand\` if the user typically needs to see the top-level contents immediately.
- **Do** use \`onClick\` to handle navigation or resource selection events.
- **Don't** put too many items at the root level; use folders to keep the top-level clean and organized.

### Accessibility
- \`Tree\` components must support keyboard navigation (Arrows to move, Space/Enter to expand/collapse).
- Ensure that each node has a descriptive name to be accurately announced by screen readers.
- All folders should have their current state (expanded/collapsed) correctly reflected in the DOM for assistive technology.
- If a node is a link, ensure it is clearly identifying its destination.
        `,
      },
    },
  },
} as Meta;
