import { Meta } from '@storybook/react';
import { Dot } from '@geist-ui/core';

export { Default } from './DotDefault';

export default {
  title: 'Components/Dot',
  component: Dot,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Best Practices

#### Usage
- **Do** use \`Dot\` to indicate the status of a service, deployment, or resource (e.g., "Online", "Building", "Failed").
- **Do** pair the dot with a descriptive text label to ensure the status is clear to all users.
- **Do** use the standard semantic types (\`success\`, \`warning\`, \`error\`) to maintain consistency across the application.
- **Don't** use dots as buttons or interactive elements; they are strictly informative indicators.

#### Placement
- **Do** place dots close to the item they are describing (e.g., next to a repository name in a list).
- **Do** ensure there is enough spacing around the dot and its label for clear legibility.
- **Don't** use too many dots in a single view, as it can create visual noise and make it harder to identify critical issues.

### Accessibility
- Status indicators must be accessible to users who cannot see color. Always provide a text label alongside the dot.
- Screen readers should be able to announce the status represented by the dot.
- Ensure that the dot and label satisfy color contrast requirements against the background.
- If the status is dynamic, consider using \`aria-live\` on the parent container to announce changes to the state.
        `,
      },
    },
  },
} as Meta;
