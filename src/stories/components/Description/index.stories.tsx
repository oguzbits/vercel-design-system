import { Meta } from '@storybook/react';
import { Description } from '@geist-ui/core';

export { Default } from './DescriptionDefault';

export default {
  title: 'Components/Description',
  component: Description,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Best Practices

#### Usage
- **Do** use \`Description\` to display key-value pairs of information, such as account details or system settings.
- **Do** provide a clear and concise \`title\` that describes the data in the \`content\`.
- **Do** use \`Description\` within cards or lists to create a scanned information hierarchy.
- **Don't** use \`Description\` for long-form prose; it is optimized for brief metadata or labels.

#### Layout
- **Do** maintain consistent alignment when using multiple \`Description\` components in a single view.
- **Do** use \`Spacer\` between description blocks to avoid visual clutter.
- **Don't** over-nest descriptions; keep the hierarchy flat and easy to parse.

### Accessibility
- Titles and content should be clearly associated for screen reader users.
- Ensure that the font size and contrast for the \`title\` (which is usually smaller/grayer) still meet accessibility guidelines.
- Use semantic HTML tags if the content within \`content\` requires specific structure (e.g., links, code).
- The \`Description\` component provides a clean layout that is easy to follow for users with cognitive disabilities.
        `,
      },
    },
  },
} as Meta;
