import { Meta } from '@storybook/react';
import { User } from '@geist-ui/core';

import UserDocumentation from './User.mdx';

export { 
  Basic,
  Description,
  Social
} from './UserBasic';

const meta: Meta<typeof User> = {
  title: 'Data Display/User',
  component: User,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: UserDocumentation,
    },
  },
  args: {},
};

export default meta;
