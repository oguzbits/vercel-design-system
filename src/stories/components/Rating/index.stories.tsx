import { Meta } from '@storybook/react';
import { Rating } from '@geist-ui/core';

export { Default } from './RatingDefault';
export { Locked } from './RatingLocked';

export default {
  title: 'Components/Rating',
  component: Rating,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Best Practices

#### Usage
- **Do** use \`Rating\` to collect user feedback or display average scores for items like products, posts, or tasks.
- **Do** provide an \`onValueChange\` handler when the rating is meant to be interactive.
- **Do** use the \`locked\` prop when displaying a calculated score that the user cannot change.
- **Don't** use \`Rating\` for binary choices; use \`Toggle\` or \`Checkbox\` instead.

#### Visuals
- **Do** choose an appropriate \`count\` (e.g., 5 or 10) that aligns with your domain's standard scoring system.
- **Do** use semantic types (\`success\`, \`error\`) sparingly and only when the score significantly deviates from the norm.
- **Don't** clutter small rows with high-count ratings; keep it simple and legible.

### Accessibility
- Interactive ratings should be keyboard accessible (users should be able to navigate and select values with the keyboard).
- Provide a text label or \`aria-label\` to describe what the rating is for.
- Screen readers should announce the current value and the maximum possible value.
- Locked ratings should be marked as read-only or disabled so that users don't attempt to interact with them.
        `,
      },
    },
  },
} as Meta;
