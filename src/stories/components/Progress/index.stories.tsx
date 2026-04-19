import { Meta } from '@storybook/react';
import { Progress } from '@geist-ui/core';

export { Default } from './ProgressDefault';
export { Type } from './ProgressType';
export { Colors } from './ProgressColors';

export default {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Best Practices

#### Usage
- **Do** use a progress bar for deterministic tasks where the length of time can be approximated or measured (e.g., file uploads, installation progress).
- **Do** provide clear feedback when the progress reaches 100%.
- **Do** use the \`colors\` prop to provide visual cues as progress moves through different stages or thresholds.
- **Don't** use a progress bar for non-deterministic tasks with unknown durations; use a \`Spinner\` or \`Loading\` component instead.

#### Design
- **Do** ensure that the progress bar occupies a consistent location in the UI to prevent layout shifts.
- **Do** pair the progress bar with a text label if the percentage value is critical for the user to know.
- **Don't** animate a progress bar backwards unless it's necessary to show a rollback or error state.

### Accessibility
- Use the \`aria-valuenow\`, \`aria-valuemin\`, and \`aria-valuemax\` attributes to communicate progress to screen readers (handled by Geist UI).
- Ensure that the color contrast of the progress bar track and filled portion meets WCAG standards for visibility.
- If the progress bar is used for a long-running background task, consider using a status message that screen readers can announce.
- Avoid using color alone to convey progress status (e.g., "red" for error) without a corresponding text label.
        `,
      },
    },
  },
} as Meta;
