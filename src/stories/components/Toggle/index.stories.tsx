import { Meta } from '@storybook/react';
import { Toggle } from '@geist-ui/core';

export { Default } from './ToggleDefault';
export { Type } from './ToggleType';
export { Size } from './ToggleSize';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Best Practices

#### Usage
- **Do** use toggles for settings that have an immediate effect upon being changed (e.g., "Dark Mode", "High Quality Previews").
- **Do** provide a clear and descriptive label adjacent to the toggle.
- **Do** ensure the state of the toggle is consistent with its visual representation (On = Checked, Off = Unchecked).
- **Don't** use a toggle for actions that require a "Save" or "Submit" button to take effect; use a \`Checkbox\` or \`Radio\` instead.

#### Layout
- **Do** allow enough vertical spacing between multiple toggles to prevent accidental clicks.
- **Do** align toggles consistently within a list (usually aligned to the right in settings panels).
- **Don't** use a toggle as a replacement for a binary choice that isn't a state switch (e.g., "Male/Female" is a choice, not a switch).

### Accessibility
- Every toggle **must** have an accessible label. If the visual label is not adjacent in code, use \`aria-label\`.
- Toggles respond to the \`Space\` and \`Enter\` keys for keyboard interaction.
- The checked state is communicated via the \`aria-checked\` attribute.
- Ensure the toggle has sufficient color contrast in both the "On" and "Off" states for users with visual impairments.
        `,
      },
    },
  },
} as Meta;
