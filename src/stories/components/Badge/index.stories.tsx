import { Meta } from '@storybook/react';
import { Badge } from '@geist-ui/core';

export { Default } from './BadgeDefault';
export { Type } from './BadgeType';
export { Dot } from './BadgeDot';

export default {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Best Practices

#### Usage
- **Do** use badges to highlight status, categories, or counts related to an object.
- **Do** keep badge content extremely concise (1-3 words or a single number).
- **Do** use the \`dot\` prop for subtle "state" indicators (e.g., online/offline, new activity).
- **Don't** use badges as buttons or for navigational links; use \`Tag\` (\`Snippet\`) or \`Button\` instead.

#### Design
- **Do** use semantic colors (\`success\`, \`warning\`, \`error\`) to communicate state at a glance.
- **Do** scale badges proportionally to their container or adjacent text.
- **Don't** clutter the UI with too many badges; they lose their effectiveness as visual cues.

### Accessibility
- Badges should have a clear text representation of their meaning.
- If a badge contains only an icon or a color-coded dot, provide an \`aria-label\` (e.g., \`<Badge dot type="success" aria-label="Online" />\`).
- Ensure the color contrast between the badge text and background is high (standard Geist types handle this).
- Badges are typically non-interactive; if the user needs to interact with the badge, consider a different component.
        `,
      },
    },
  },
} as Meta;
