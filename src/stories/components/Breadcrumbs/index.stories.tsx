import { Meta } from '@storybook/react';
import { Breadcrumbs } from '@geist-ui/core';

export { Default } from './BreadcrumbsDefault';
export { Separator } from './BreadcrumbsSeparator';
export { Size } from './BreadcrumbsSize';

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Best Practices

#### Usage
- **Do** use breadcrumbs to show the user's current location within a hierarchical site structure.
- **Do** include the current page as the last item in the breadcrumb list, but do not link it.
- **Do** use icons (\`Home\`, etc.) sparingly to provide visual anchors.
- **Don't** use breadcrumbs as the primary navigation for a website; they are secondary to top-level menus.

#### Design
- **Do** use the \`separator\` prop to match the navigational "feel" of your application.
- **Do** wrap breadcrumbs in a \`nav\` element to clarify its purpose for assistive technology.
- **Don't** crowd breadcrumbs; if the path is too long, consider truncating intermediate steps.

### Accessibility
- Breadcrumbs are provided within a \`<nav>\` element with a label like "Breadcrumb" to identify the landmarks to screen readers.
- Intermediate breadcrumb items should be focusable links, while the current page item should be text only.
- The separator should be hidden from screen readers using \`aria-hidden="true"\` if it's purely decorative (handled by Geist UI).
- Use clear and concise text for each path segment to ensure it is easily understood by all users.
        `,
      },
    },
  },
} as Meta;
