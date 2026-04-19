import { Meta } from '@storybook/react';
import { Link } from '@geist-ui/core';

export { Default } from './LinkDefault';
export { Colors } from './LinkColors';
export { Icons } from './LinkIcons';
export { Block } from './LinkBlock';

export default {
  title: 'Components/Link',
  component: Link,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Best Practices

#### Usage
- **Do** use links for navigation between pages or sections of the same page.
- **Do** make link text descriptive and indicative of its destination (avoid "click here").
- **Do** use the \`block\` prop for navigation items in a list or when you want a larger tap target.
- **Don't** use a link if the action is destructive or modifies state; use a \`Button\` instead.

#### Design
- **Do** use the \`icon\` prop for external links to provide a visual cue that the user is leaving the current site.
- **Do** use themed colors (\`color\` prop) to emphasize important navigational paths.
- **Don't** over-underline links if they are clearly identifiable by their context or color.

### Accessibility
- Links **must** have descriptive text. If an icon-only link is used, provide an \`aria-label\`.
- External links should ideally notify the user (e.g., "Documentation (opens in a new tab)").
- Ensure that the link color has sufficient contrast against its background.
- Interactive keyboard focus states are handled by Geist UI, ensuring clear visibility for keyboard users.
        `,
      },
    },
  },
} as Meta;
