import { Meta } from '@storybook/react';
import { Drawer } from '@geist-ui/core';

export { Default } from './DrawerDefault';
export { Placement } from './DrawerPlacement';

export default {
  title: 'Components/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Best Practices

#### Usage
- **Do** use drawers for supplemental content that requires more space than a \`Popover\` but less permanence than a full page.
- **Do** use drawers for navigation menus on smaller screens (mobile view).
- **Do** provide a clear way to close the drawer (e.g., clicking the backdrop or using an explicit close button).
- **Don't** use a drawer for critical information that the user must see to proceed with the main workflow; consider a \`Modal\` or inline content instead.

#### Design
- **Do** use the \`placement\` prop logically (e.g., "right" for settings, "left" for navigation).
- **Do** ensure that the drawer's transition is smooth and doesn't jar the user's experience.
- **Don't** stack multiple drawers on top of each other; it becomes confusing for navigation.

### Accessibility
- Drawers **must** handle focus correctly: when opened, move focus into the drawer. When closed, return focus to the trigger.
- Drawer content should be accessible via keyboard (standard tab order).
- The drawer can be dismissed with the \`Esc\` key.
- Triggers should use \`aria-haspopup="true"\` to indicate the expansion (handled by Geist UI).
- Ensure that the backdrop effectively prevents clicks on the underlying content while the drawer is active.
        `,
      },
    },
  },
} as Meta;
