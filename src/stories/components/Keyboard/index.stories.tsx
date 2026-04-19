import { Meta } from '@storybook/react';
import { Keyboard } from '@geist-ui/core';

export { Default } from './KeyboardDefault';

export default {
  title: 'Components/Keyboard',
  component: Keyboard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Best Practices

#### Usage
- **Do** use \`Keyboard\` to represent physical keyboard keys or combinations of keys (shortcuts).
- **Do** leverage the modifier props (\`command\`, \`shift\`, \`option\`, \`ctrl\`) to automatically render the correct symbols.
- **Do** place key combinations within sentences to provide clear instructions for power users.
- **Don't** use \`Keyboard\` for regular code snippets; use the \`Code\` component for that.

#### Aesthetics
- **Do** keep the inner text short (usually a single letter, number, or symbol).
- **Do** match the platform-specific conventions where possible (e.g., using \`command\` for macOS).
- **Don't** stack too many keys together in a way that becomes hard to read at a glance.

### Accessibility
- Keyboard shortcuts should be discoverable and documented for users who rely on keyboard navigation.
- Use the \`kbd\` HTML element (which Geist UI does internally) to semantically identify keyboard input.
- Ensure that the font and contrast of the keys are sufficient for users with visual impairments.
- If a shortcut is critical for an action, ensure there is also a visible UI element (like a menu item) that performs the same function.
        `,
      },
    },
  },
} as Meta;
