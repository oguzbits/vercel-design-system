import { Meta } from '@storybook/react';
import { Textarea } from '@geist-ui/core';

export { Default } from './TextareaDefault';
export { Type } from './TextareaType';
export { Resize } from './TextareaResize';

export default {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Best Practices

#### Content Length
- **Do** use Textarea when you expect the user to input more than one line of text (e.g., descriptions, comments, bios).
- **Do** provide a clear and descriptive label or placeholder to guide the user on the expected content.
- **Don't** use Textarea for short, single-line data like Names or Emails; use \`Input\` instead.

#### Layout and Resizing
- **Do** consider using \`resize="vertical"\` as a default to prevent the layout from breaking horizontally while allowing users to expand their workspace.
- **Do** ensure the initial height is sufficient for the typical expected content size.
- **Don't** disable resizing unless the Textarea is in a very constrained container where overflow is handled specifically (e.g., a small sidebar).

### Accessibility
- Every Textarea **must** have a label. Place it above the field for maximum readability and screen reader association.
- If there is a character limit, ensure it is communicated clearly to users as they type (consider adding a dynamic counter in a Note).
- Ensure that the focus indicator is clearly visible; Geist UI handles this via standard pseudo-classes.
- Screen readers will announce the Textarea role and any associated labels or descriptive text via \`aria-labelledby\` or \`aria-describedby\`.
        `,
      },
    },
  },
} as Meta;
