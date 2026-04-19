import { Meta } from '@storybook/react';
import { Popover } from '@geist-ui/core';

export { Default } from './PopoverDefault';
export { Item } from './PopoverMenu';

export default {
  title: 'Components/Popover',
  component: Popover,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Best Practices

#### Usage
- **Do** use a popover to present information or interactive content that overflows or is secondary to the main view.
- **Do** use the \`Popover.Item\` pattern for structured lists or menus within the popover.
- **Do** allow the user to trigger the popover with a clear action (click or hover).
- **Don't** use a popover for simple help text; use \`Tooltip\` instead.

#### Content
- **Do** keep the content within the popover focused and limited in scope.
- **Do** use a logical hierarchy (e.g., titles, lines, and links) to organize menus.
- **Don't** nest complex components (like tabs or large tables) within a popover if it can be avoided.

### Accessibility
- Popovers **must** manage focus correctly: when opened via click, focus should move into the popover if it contains interactive elements.
- The popover can be closed using the \`Esc\` key.
- Triggers should use \`aria-haspopup\` and \`aria-expanded\` to communicate their state to assistive technology (handled by Geist UI).
- Ensure that the popover content is properly announced by screen readers when it becomes visible.
        `,
      },
    },
  },
} as Meta;
