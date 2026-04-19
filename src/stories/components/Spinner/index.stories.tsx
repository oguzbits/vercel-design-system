import { Meta } from '@storybook/react';
import { Spinner } from '@geist-ui/core';

export { Default } from './SpinnerDefault';
export { Size } from './SpinnerSize';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Best Practices

#### Usage
- **Do** use a spinner for non-deterministic loading states where the wait time is unknown (e.g., initial data fetch, searching).
- **Do** center the spinner within its container to provide a stable visual anchor.
- **Do** scale the spinner proportionally to its context (small inside buttons, large for full-page loads).
- **Don't** use a spinner if the process takes less than 1 second; it may feel like a glitch.

#### User Experience
- **Do** pair the spinner with a text label (e.g., "Loading data...") if the context isn't immediately obvious.
- **Do** use a \`Progress\` bar instead of a spinner if the task is deterministic and you can measure progress.
- **Don't** allow multiple spinners to clutter a single page; use a single high-level spinner or skeleton screens.

### Accessibility
- Spinners **must** be accompanied by an \`aria-label\` (e.g., "Loading") to inform screen reader users of the background activity.
- Use \`role="status"\` or \`aria-live="polite"\` on a container to ensure the loading state is announced without interrupting the user.
- Ensure that the spinner's animation is smooth and doesn't cause vertigo or other issues for sensitive users.
- Provide a non-animated fallback if the user has \`prefers-reduced-motion\` enabled.
        `,
      },
    },
  },
} as Meta;
