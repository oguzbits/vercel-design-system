import { Meta } from '@storybook/react';
import { Avatar } from '@geist-ui/core';

export { Default } from './AvatarDefault';
export { Group } from './AvatarGroup';
export { Text } from './AvatarText';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Best Practices

#### Usage
- **Do** use avatars to represent individual users or teams within your application.
- **Do** provide an image source (\`src\`) whenever possible for a more personalized experience.
- **Do** use the \`text\` prop as a fallback monogram when an image is not available.
- **Do** use \`Avatar.Group\` to represent multiple users (e.g., project collaborators, team members).
- **Don't** use avatars to represent non-human entities (e.g., files, folders); use icons instead.

#### Design
- **Do** ensure that avatars are large enough to be recognizable but not so large that they dominate the UI.
- **Do** use \`isSquare\` for non-human or project-level representations if appropriate for your brand.
- **Don't** put critical text inside an avatar; it should be used for visual identification only.

### Accessibility
- Avatars **must** have a descriptive \`alt\` attribute if they are images (handled via native props).
- Text-based avatars (monograms) should be readable and clear to screen readers.
- If an avatar is used as a link to a profile, ensure the link itself is properly labeled (e.g., "View Profile of [User Name]").
- Avatar groups should have a label or context indicating what the group represents (e.g., "Assigned to 4 users").
        `,
      },
    },
  },
} as Meta;
