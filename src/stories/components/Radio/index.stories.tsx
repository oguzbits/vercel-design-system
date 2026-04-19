import { Meta } from '@storybook/react';
import { Radio } from '@geist-ui/core';

export { Default } from './RadioDefault';
export { Group } from './RadioGroup';
export { Description } from './RadioDescription';

export default {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Best Practices

#### Usage
- **Do** use radio buttons when users need to select exactly one option from a list of two or more mutually exclusive choices.
- **Do** provide at least two options for a radio group.
- **Do** use a default selection whenever possible to guide the user.
- **Don't** use radio buttons when multiple selections are allowed; use \`Checkbox\` instead.

#### Content and Layout
- **Do** use \`Radio.Description\` to provide supporting text for complex options (like pricing plans).
- **Do** list options in a logical order (e.g., simplest to most complex, cheapest to most expensive).
- **Don't** use too many radio buttons in a row; if you have more than 5 options, consider using a \`Select\` component.

### Accessibility
- Every radio button group **must** be contained within a fieldset or managed by \`Radio.Group\` to ensure correct screen reader navigation within the group context.
- Radio buttons are keyboard-accessible using the \`Tab\` key to enter the group and arrow keys to navigate between options.
- The \`aria-checked\` and \`aria-disabled\` states are handled automatically by Geist UI.
- Use \`Radio.Description\` to ensure auxiliary text is correctly associated with the input for assistive technology.
        `,
      },
    },
  },
} as Meta;
