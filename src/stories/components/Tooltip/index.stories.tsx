import { Meta } from '@storybook/react';
import { Tooltip } from '@geist-ui/core';

export { Default } from './TooltipDefault';
export { Placement } from './TooltipPlacement';
export { Type } from './TooltipType';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Best Practices

#### Usage
- **Do** use tooltips to provide brief, supplemental information about an interactive element.
- **Do** ensure that the tooltip appears on hover and focus.
- **Do** use different color types (\`success\`, \`error\`, etc.) to convey semantic meaning.
- **Don't** put essential information in a tooltip, as it may not be visible to all users (e.g., mobile users without long-press support).

#### Design
- **Do** keep tooltip text concise (labels or single sentences).
- **Do** select a placement that does not obscure other important information or interactive elements.
- **Don't** use tooltips on elements that already have clearly descriptive text.

### Accessibility
- Tooltips are automatically associated with their triggers using \`aria-labelledby\` or \`aria-describedby\` (handled by Geist UI).
- Tooltips **must** be triggered on both mouse hover and keyboard focus.
- Avoid using tooltips for critical instructions or interactions; if interactive content is needed in a popup, use \`Popover\` instead.
- The tooltip content should remain visible for a sufficient amount of time to be read by the user.
        `,
      },
    },
  },
} as Meta;
