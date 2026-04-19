import { Meta } from '@storybook/react';
import { Code } from '@geist-ui/core';

export { Default } from './CodeDefault';

export default {
  title: 'Components/Code',
  component: Code,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Best Practices

#### Usage
- **Do** use \`Code\` for short, technical strings like variable names, file paths, or CLI commands.
- **Do** use the \`block\` prop for multi-line code examples that need to stand out from the text.
- **Do** use the \`name\` prop for code blocks to identify the file or context for the user.
- **Don't** use \`Code\` for long paragraphs of text; it is specifically for technical content.

#### Formatting
- **Do** ensure that code blocks use a monospace font for readability.
- **Do** wrap long lines within regular \`Code\` blocks or ensure the \`Code block\` has proper horizontal scrolling.
- **Don't** use code blocks if you only need bold or italicized text; those are different semantic concerns.

### Accessibility
- Inline code should be distinguishable from the surrounding text by more than just color (e.g., using a background or border).
- Code blocks should have a stable layout that doesn't cause horizontal scrolling unless necessary.
- Ensure that the font used within the \`Code\` component is clear and readable for all users.
- Screen readers typically identify \`code\` tags as mono-spaced or verbatim text, ensuring the technical nature of the content is conveyed.
        `,
      },
    },
  },
} as Meta;
