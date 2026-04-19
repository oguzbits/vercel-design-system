import { Meta } from '@storybook/react';
import { Display } from '@geist-ui/core';

export { Default } from './DisplayDefault';
export { Shadow } from './DisplayShadow';

export default {
  title: 'Components/Display',
  component: Display,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Best Practices

#### Usage
- **Do** use \`Display\` to showcase large, centered blocks of content like images, mockup screenshots, or code blocks.
- **Do** provide a \`caption\` to give additional context or explanation for the displayed element.
- **Do** use the \`shadow\` prop to elevate the content and make it stand out from the page background.
- **Don't** use \`Display\` for small inline elements; it is designed for larger, featured content.

#### Layout
- **Do** ensure the content inside \`Display\` is centered and properly scaled.
- **Do** keep the caption concise and descriptive.
- **Don't** over-nest complex layouts inside \`Display\`; keep it focused on a single asset or message.

### Accessibility
- Captions should be clear and readable by screen readers.
- If the displayed content is an image, ensure it has a proper \`alt\` text.
- If the content is a code block, ensure it is properly tagged for syntax highlighting and screen reader accessibility.
- The use of \`shadow\` should not interfere with the contrast or legibility of the surrounding content.
        `,
      },
    },
  },
} as Meta;
