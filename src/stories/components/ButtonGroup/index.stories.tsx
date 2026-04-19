import { Meta } from '@storybook/react';
import { ButtonGroup } from '@geist-ui/core';

export { Default } from './ButtonGroupDefault';
export { Vertical } from './ButtonGroupVertical';
export { Type } from './ButtonGroupType';

export default {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Best Practices

#### Usage
- **Do** use \`ButtonGroup\` to group closely related actions that share the same context or control the same object.
- **Do** use \`vertical\` orientation when the number of actions is large or when space is limited horizontally.
- **Do** maintain a consistent \`type\` or \`ghost\` style across all buttons in a group to ensure visual unity.
- **Don't** mix vastly different action types (e.g., "Delete" and "Settings") in the same group without clear separation.

#### Alignment
- **Do** order buttons logically (e.g., progressive actions from left to right, or primary action at the end).
- **Do** use the same \`scale\` for all buttons within the group to avoid awkward height differences.
- **Don't** nest a \`ButtonGroup\` inside another \`ButtonGroup\`.

### Accessibility
- Use a wrapper with \`role="group"\` and an appropriate \`aria-label\` if the group's purpose isn't clear from context.
- Ensure that each \`Button\` within the group has a unique and descriptive label.
- Keyboard navigation should allow users to Tab into the group and move through buttons sequentially.
- If the buttons represent a selection (like tabs), use \`aria-pressed\` to indicate the active state.
        `,
      },
    },
  },
} as Meta;
