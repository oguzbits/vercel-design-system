import { Meta } from '@storybook/react';
import { User } from '@geist-ui/core';

export { Basic, Description } from './UserBasic';

export default {
  title: 'Data Display/User',
  component: User,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Display a user with name, description and avatar.',
      },
    },
  },
} as Meta;
