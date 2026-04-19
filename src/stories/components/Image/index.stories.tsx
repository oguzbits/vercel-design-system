import { Meta } from '@storybook/react';
import { Image } from '@geist-ui/core';

export { Default } from './ImageDefault';
export { Skeleton } from './ImageSkeleton';
export { Browser } from './ImageBrowser';

export default {
  title: 'Components/Image',
  component: Image,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Best Practices

#### Usage
- **Do** use \`Image\` for all static assets to benefit from automatic skeleton loading and optimization.
- **Do** use \`ImageBrowser\` when showcasing web application UI, as it provides a professional decorative context.
- **Do** provide \`width\` and \`height\` to prevent layout shifts during image loading.
- **Don't** use \`ImageBrowser\` for actual functional browsers; it is a purely decorative display component.

#### Aesthetics
- **Do** use the \`invert\` prop on \`ImageBrowser\` when displaying dark-themed screenshots on a light page.
- **Do** keep images high-resolution to maintain clarity on high-DPI displays.
- **Don't** disable the skeleton unless the image is very small and loads nearly instantaneously.

### Accessibility
- Always provide an \`alt\` text (via native img attributes) for all images to support screen reader users.
- For \`ImageBrowser\`, ensure the \`title\` and \`url\` accurately represent the content being displayed.
- Skeleton states are helpful for users on slow connections, as they signal that content is coming.
- Ensure that any decorative browser controls (like dots) have sufficient contrast but don't distract from the main image content.
        `,
      },
    },
  },
} as Meta;
