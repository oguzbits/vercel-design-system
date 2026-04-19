import { Meta } from '@storybook/react';
import { User } from '@geist-ui/core';

export { Default } from './UserDefault';

export default {
  title: 'Components/User',
  component: User,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Best Practices

#### Usage
- **Do** use the \`User\` component to display a user's profile information alongside their name and description/links.
- **Do** provide a clear name and a high-quality \`src\` for the avatar.
- **Do** use the \`children\` slot to add secondary information such as handles, roles, or website links.
- **Don't** use this component for purely structural or layout purposes; it is specifically for user identity.

#### Design
- **Do** ensure that there is enough contrast between the text and the background.
- **Do** keep the description/link concise to avoid cluttering the row.
- **Don't** wrap very long names that might break the component's typical single-row horizontal layout.

### Accessibility
- The avatar image should have an appropriate \`altText\` to identify the user.
- Links and other interactive elements in the user description should follow standard ARIA guidelines.
- The component uses a flexbox layout that is accessible to screen readers as a group of related identity information.
- Ensure that the font size for names and links meets readability standards.
        `,
      },
    },
  },
} as Meta;
