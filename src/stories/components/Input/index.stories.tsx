import { Meta } from '@storybook/react';
import { Input } from '@geist-ui/core';

export { Default } from './InputDefault';
export { Type } from './InputType';
export { Size } from './InputSize';
export { States } from './InputStates';
export { Content } from './InputContent';
export { Interactions } from './InputInteractions';

export default {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Best Practices

#### Layout
- **Do** use standard alignment for labels (usually left-aligned above or to the left of the input).
- **Do** ensure adequate contrast between the input border and the background (at least 3:1).
- **Don't** use too many different sizes of inputs on a single page; maintain a consistent scale.
- **Do** use placeholders sparingly; they are not a replacement for labels.

#### Interaction
- **Do** provide immediate feedback for validation errors.
- **Do** use the \`clearable\` prop for search inputs or fields where users frequently need to reset content.
- **Do** use appropriate \`htmlType\` (e.g., "password", "email", "number") to trigger the correct mobile keyboard.

### Accessibility
- Every input **must** have a descriptive label. If a visual label is not present, use \`aria-label\`.
- Use \`aria-describedby\` to link error messages or helper text to the input.
- Input states (disabled, error) are communicated to assistive technology via standard HTML attributes.
- High-quality focus rings are provided by the Geist UI theme to ensure keyboard navigability.
        `,
      },
    },
  },
} as Meta;
