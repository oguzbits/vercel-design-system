import { Meta } from '@storybook/react';
import { Badge } from '@geist-ui/core';

import BadgeDocumentation from './Badge.mdx';

export { 
  Basic,
  Type,
  CustomColor,
  Anchor
} from './BadgeBasic';

const meta: Meta<typeof Badge> = {
  title: 'Data Display/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: BadgeDocumentation,
    },
  },
  args: {},
};

export default meta;
