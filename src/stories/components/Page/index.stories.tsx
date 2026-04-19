import { Meta } from '@storybook/react';
import { Page } from '@geist-ui/core';

export { Default } from './PageDefault';
export { DotBackdrop } from './PageDotBackdrop';

export default {
  title: 'Components/Page',
  component: Page,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Best Practices

#### Usage
- **Do** use the \`Page\` component to wrap the main content of a view or entire application.
- **Do** utilize \`Page.Header\`, \`Page.Content\`, and \`Page.Footer\` to create a structured and predictable layout.
- **Do** use \`dotBackdrop\` to add visual interest and texture to background surfaces, especially for dashboards and landing pages.
- **Don't** nest multiple \`Page\` components; there should typically only be one per view.

#### Responsive Design
- **Do** rely on the default padding and responsive behavior of the \`Page\` component to handle different screen sizes.
- **Do** center content within \`Page.Content\` to ensure readability on wide displays.
- **Don't** override the default width or margin properties unless necessary for a specific full-width design.

### Accessibility
- Use semantic HTML tags within \`Page.Header\` (\`<header>\`), \`Page.Content\` (\`<main>\`), and \`Page.Footer\` (\`<footer>\`) to provide a clear document map.
- Ensure that the primary \`h1\` or \`h2\` heading is placed inside the \`Page.Header\` for SEO and screen reader navigation.
- The dot backdrop is purely decorative and should not interfere with the readability of text or interactive elements.
- Page transitions should move focus to the top of the new page or a relevant heading to help screen reader users identify the context change.
        `,
      },
    },
  },
} as Meta;
