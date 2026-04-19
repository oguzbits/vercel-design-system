import { Meta } from '@storybook/react';
import { Loading } from '@geist-ui/core';

export { Default } from './LoadingDefault';
export { Type } from './LoadingType';

export default {
  title: 'Components/Loading',
  component: Loading,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Best Practices

#### Usage
- **Do** use \`Loading\` to indicate that an operation is in progress and the user should wait.
- **Do** provide a text child if the context of the loading state is not immediately obvious (e.g., "Uploading...").
- **Do** place the loading indicator as close as possible to the area that is being loaded (e.g., inside a specific card or button).
- **Don't** use \`Loading\` for long-running processes that should be handled in the background; use a deterministic \`Progress\` bar instead.

#### Visuals
- **Do** use the \`spaceRatio\` prop to adjust the visual density of the dots if needed for smaller containers.
- **Do** ensure that the color of the dots has enough contrast against the background.
- **Don't** use colored loading indicators unless they specifically correlate with the status of the action (e.g., a green loading bar for a "Processing Payment").

### Accessibility
- Loading indicators should be marked with \`aria-busy="true"\` on the parent container (handled by Geist UI).
- Ensure that the loading state is announced to screen reader users via a live region if the state change is critical.
- If text is provided inside \`Loading\`, it will be readable by assistive technologies, providing context for the wait.
- Avoid using fast-flashing animations that could trigger photosensitive seizures; the Geist \`Loading\` component uses a gentle, rhythmic pulse.
        `,
      },
    },
  },
} as Meta;
