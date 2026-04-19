import { Meta } from '@storybook/react';
import { Button } from '@geist-ui/core';

export { Default } from './ButtonDefault';
export { Type } from './ButtonType';
export { Icon } from './ButtonIcon';
export { Loading } from './ButtonLoading';
export { Interactions } from './ButtonInteractions';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Best Practices

#### Layout
- **Do** use a primary button (type="secondary") for the main action on a page.
- **Do** limit the number of primary buttons; usually one per container.
- **Don't** use too many buttons in close proximity; consider using a Menu or Dropdown.
- **Do** use ghost or default buttons for secondary actions to maintain hierarchy.

#### Content
- **Do** use clear, concise, action-oriented labels (e.g., "Save", "Create Project").
- **Do** use sentence case for button labels.
- **Don't** use generic labels like "Click Here" or "Submit" if a more specific verb exists.

### Accessibility
- Every button should have a clear accessible name. If using only an icon, provide an \`aria-label\`.
- Buttons have a minimum touch target size of 44x44px implicitly when using standard scales.
- High contrast support is built-in via the Geist UI theme system.
        `,
      },
    },
  },
} as Meta;
