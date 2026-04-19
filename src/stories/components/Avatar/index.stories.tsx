import { Meta } from '@storybook/react';
import { Avatar } from '@geist-ui/core';

export { Basic, Group } from './AvatarBasic';

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Avatars are used to represent users or entities.',
      },
    },
  },
} as Meta;
