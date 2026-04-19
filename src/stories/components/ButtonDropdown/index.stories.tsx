import { Meta } from '@storybook/react';
import { ButtonDropdown } from '@geist-ui/core';

export { Default } from './ButtonDropdownDefault';
export { Type } from './ButtonDropdownType';

export default {
  title: 'Components/ButtonDropdown',
  component: ButtonDropdown,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Best Practices

#### Usage
- **Do** use \`ButtonDropdown\` to group related actions under a single primary command button.
- **Do** mark the most common or default action as \`main\` to make it the primary click target.
- **Do** use \`auto\` width if the button label is short, or fixed \`width\` for consistent sizing in sidebars or toolbars.
- **Don't** use \`ButtonDropdown\` if there is only one action available; use a standard \`Button\` instead.

#### Hierarchy
- **Do** order the items within the dropdown by frequency of use or logical importance.
- **Do** use status types (\`success\`, \`error\`) when the primary action involves a significant state change or destructive operation.
- **Don't** put mutually exclusive, high-risk actions (like "Save" and "Delete") in the same dropdown without clear visual differentiation.

### Accessibility
- \`ButtonDropdown\` components must be fully keyboard accessible (Tab to focus, Space/Enter to toggle, Arrows to navigate).
- Ensure the dropdown menu uses proper ARIA roles (\`menu\`, \`menuitem\`) to describe the interaction to screen readers.
- Provide a clear label for the dropdown button so users know it contains additional actions.
- The \`main\` item should be clearly identified as the primary action both visually and semantically.
        `,
      },
    },
  },
} as Meta;
