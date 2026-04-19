import { Meta } from '@storybook/react';
import { Select } from '@geist-ui/core';

export { Default } from './SelectDefault';
export { Type } from './SelectType';
export { Multiple } from './SelectMultiple';

export default {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Best Practices

#### Usage
- **Do** use a select component when users need to choose one or more options from a list of five or more items.
- **Do** use a default "placeholder" to indicate the expected input if no initial value is appropriate.
- **Do** keep option labels short and clear.
- **Don't** use a select if there are fewer than four options unless space is extremely limited; use \`Radio\` instead for better visibility.

#### Multiple Selection
- **Do** use the \`multiple\` prop when users can select multiple criteria (e.g., filtering by tags).
- **Do** use the \`clearable\` prop to allow users to quickly reset their selection.
- **Don't** use a multiple select for critical data where the user might overlook hidden selections in the collapsed tag view.

### Accessibility
- Every Select component **must** be accompanied by a label.
- The dropdown is keyboard-accessible: use \`Enter\` or \`Space\` to open, arrow keys to navigate, and \`Enter\` to select.
- Assistive technologies will announce the current selection and the total number of options.
- Geist UI ensures that the dropdown portal is correctly managed for focus trapping and screen reader visibility.
        `,
      },
    },
  },
} as Meta;
