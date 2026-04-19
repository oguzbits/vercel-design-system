import { Meta } from '@storybook/react';
import { Tag } from '@geist-ui/core';

export { Default } from './TagDefault';
export { Type } from './TagType';
export { Invert } from './TagInvert';

export default {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Best Practices

#### Usage
- **Do** use tags to categorize content or represent metadata (e.g., tags on a blog post, framework identifiers).
- **Do** keep tag labels concise and consistent in casing (e.g., all lowercase or all Title Case).
- **Do** use the \`invert\` prop for a bolder visual weight when the tag needs to stand out as a primary category.
- **Don't** use tags for actions that change or delete data; use \`Button\` or \`Badge\` (if purely status) instead.

#### Layout
- **Do** group related tags together with consistent spacing.
- **Do** ensure that tags are easily distinguishable from clickable buttons.
- **Don't** use too many conflicting colors in a single tag cloud; stick to a consistent color palette.

### Accessibility
- Tags should be descriptive and easily read by screen readers.
- If a tag is interactive (e.g., clickable to filter), ensure it has a proper focus state and keyboard interaction (handled by standard link/button patterns if wrapped).
- The \`invert\` prop ensures high contrast for visual clarity.
- Ensure that the color coding of tags is not the only way to convey meaning (e.g., include text labels).
        `,
      },
    },
  },
} as Meta;
