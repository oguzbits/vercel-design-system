import { Meta } from '@storybook/react';
import { Checkbox } from '@geist-ui/core';

export { Default } from './CheckboxDefault';
export { Type } from './CheckboxType';
export { Group } from './CheckboxGroup';
export { States } from './CheckboxStates';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Best Practices

#### Usage
- **Do** use checkboxes when users can select multiple options from a related set.
- **Do** use a single checkbox for a standalone "Yes/No" or "On/Off" toggle (like "Accept Terms").
- **Do** provide a clear and descriptive label for every checkbox.
- **Don't** use checkboxes when only one selection is allowed; use \`Radio\` instead.

#### Layout
- **Do** group related checkboxes using \`Checkbox.Group\` to manage their state together.
- **Do** stack checkboxes vertically for better readability when there are more than three options.
- **Don't** use too many checkboxes in a small space; consider using a multiselect \`Select\` if the list is extensive.

### Accessibility
- Every checkbox **must** be associated with a label using semantic HTML (Geist handles this via children or explicit props).
- Checkboxes are keyboard-accessible via the \`Tab\` and \`Space\` keys.
- Input states (checked, partially checked, disabled) are communicated to assistive technology via standard HTML attributes.
- Use \`aria-label\` if the checkbox does not have a visible text label.
        `,
      },
    },
  },
} as Meta;
