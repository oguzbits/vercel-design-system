import { Meta } from '@storybook/react';
import { Divider } from '@geist-ui/core';

export { Default } from './DividerDefault';
export { Type } from './DividerType';

export default {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Best Practices

#### Usage
- **Do** use \`Divider\` to separate logically related blocks of content or to group related form controls.
- **Do** use the text children (\`Divider\` with child) to provide a descriptive label for the following section.
- **Do** use different alignments (\`start\`, \`center\`, \`end\`) for the text label to suit the visual rhythm of the page.
- **Don't** overuse dividers; whitespace (via \`Spacer\`) is often a cleaner way to achieve separation.

#### Design
- **Do** ensure that the divider type matches the context (e.g., using \`error\` divider before a destructive action section).
- **Do** maintain consistent spacing before and after the divider.
- **Don't** place a divider immediately after a header if the background change or font size already provides enough separation.

### Accessibility
- Dividers are primarily decorative but can provide a structural hint to screen reader users (Geist UI uses \`role="separator"\`).
- Ensure that text labels within dividers have sufficient contrast against the divider line and the background.
- Screen readers should be able to announce the label when reaching the divider, providing context for the next section.
        `,
      },
    },
  },
} as Meta;
