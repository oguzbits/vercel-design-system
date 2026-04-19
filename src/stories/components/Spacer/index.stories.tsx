import { Meta } from '@storybook/react';
import { Spacer } from '@geist-ui/core';

export { Default } from './SpacerDefault';

export default {
  title: 'Components/Spacer',
  component: Spacer,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Best Practices

#### Usage
- **Do** use \`Spacer\` to add consistent vertical or horizontal whitespace between components.
- **Do** leverage the \`h\` (height) and \`w\` (width) scale props to maintain a rhythmic layout based on the design system's spacing tokens.
- **Do** use the \`inline\` prop when you need to separate elements within a flexbox or inline-block container.
- **Don't** use \`Spacer\` if the layout can be naturally achieved with \`margin\` or \`gap\` in a more semantic way.

#### Scaling
- **Do** use standard increments (1, 2, 3...) to keep the spacing predictable and tied to the grid.
- **Do** ensure that the amount of space is appropriate for the scale of the surrounding elements.
- **Don't** use extremely large spacers that break the visual connection between related content sections.

### Accessibility
- Spacers are purely decorative and should be invisible to screen readers (Geist UI ensures they don't contain semantic content).
- Ensure that the whitespace created by spacers doesn't cause important content to be pushed off the screen on smaller devices without proper responsive handling.
- Spacing helps users with cognitive disabilities by reducing visual clutter and grouping related information clearly.
        `,
      },
    },
  },
} as Meta;
