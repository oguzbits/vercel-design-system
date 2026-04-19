import { Meta } from '@storybook/react';
import { Capacity } from '@geist-ui/core';

export { Default } from './CapacityDefault';
export { Color } from './CapacityColor';

export default {
  title: 'Components/Capacity',
  component: Capacity,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Best Practices

#### Usage
- **Do** use \`Capacity\` to provide a quick visual summary of resource usage (e.g., storage limits, usage quotas).
- **Do** keep the component small and integrated into larger cards or rows.
- **Do** use custom colors to match the specific context of the resource being measured.
- **Don't** use \`Capacity\` as a primary \`Progress\` bar; it is intended for a higher-level, more compact overview.

#### Design
- **Do** ensure that the capacity bar is easily visible against its background.
- **Do** provide a legend or text label if the exact value or units are necessary for the user.
- **Don't** clutter a single view with too many capacity indicators; only show the most relevant ones.

### Accessibility
- Capacity indicators should be described by a text label that identifies the resource and current value.
- Use \`aria-valuenow\`, \`aria-valuemin\`, and \`aria-valuemax\` to provide semantic information (handled by Geist UI).
- Ensure high contrast between the filled portion and the track for low-vision users.
- If the resource reaches a critical limit, use a color change (\`red\`) AND an additional visual indicator (like an icon or text message).
        `,
      },
    },
  },
} as Meta;
