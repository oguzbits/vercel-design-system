import { Meta } from '@storybook/react';
import { Snippet } from '@geist-ui/core';

export { Default } from './SnippetDefault';
export { Type } from './SnippetType';
export { Multi } from './SnippetMulti';

export default {
  title: 'Components/Snippet',
  component: Snippet,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Best Practices

#### Usage
- **Do** use \`Snippet\` for short, copyable pieces of text such as CLI commands, API keys, or initialization scripts.
- **Do** provide a clear \`symbol\` (e.g., \`$\`) for shell commands to help users distinguish them from regular text.
- **Do** use the \`multi\` (via array text) pattern for multi-step processes that should be copied together.
- **Don't** use snippets for regular paragraphs of text that don't need to be copied exactly.

#### Interaction
- **Do** ensure that the "Copy" action provides visual feedback (e.g., a toast or icon change).
- **Do** keep the snippet width manageable so it doesn't break the layout when placing it inside cards or rows.
- **Don't** disable the copy button unless the snippet is purely decorative, as it breaks the component's primary utility.

### Accessibility
- Snippet components use a button for the "Copy" action which should be keyboard accessible (standard tab order).
- The text to be copied should be readable by screen readers.
- Ensure that the visual feedback for copying is also conveyed to non-visual users (e.g., using \`aria-live\` on a toast).
- Color contrast for the "status" types (\`success\`, \`error\`) should meet WCAG guidelines to ensure visibility.
        `,
      },
    },
  },
} as Meta;
