import { Meta } from '@storybook/react';
import { Collapse } from '@geist-ui/core';

export { Default } from './CollapseDefault';
export { Group } from './CollapseGroup';
export { Shadow } from './CollapseShadow';

export default {
  title: 'Components/Collapse',
  component: Collapse,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Best Practices

#### Usage
- **Do** use collapse for content that is secondary to the main task (e.g., FAQ sections, technical details).
- **Do** provide clear, descriptive titles that explain what content is hidden within the collapsed section.
- **Do** use \`Collapse.Group\` (accordion) when only one section of a related set should be expanded at a time to save space.
- **Don't** use collapse for critical information that the user must read; vital content should be permanently visible.

#### Design
- **Do** use \`shadow\` sparingly for content that needs higher visual prominence.
- **Do** include a subtitle if the title alone isn't enough to identify the content's purpose.
- **Don't** put interactive elements like buttons inside a collapse title; it conflicts with the expansion trigger.

### Accessibility
- Collapse triggers use \`aria-expanded\` and \`aria-controls\` to communicate their state to assistive technology (handled by Geist UI).
- Ensure that the entire title bar is focusable and clickable to expand or collapse.
- Keyboard users can expand or collapse sections using the \`Enter\` or \`Space\` keys.
- Avoid using very long or complex content inside a collapse that might be difficult to navigate once expanded.
        `,
      },
    },
  },
} as Meta;
