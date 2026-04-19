import { Meta } from '@storybook/react';
import { Tag } from '@geist-ui/core';

import TagDocumentation from './Tag.mdx';

export { 
  Basic,
  Types,
  Invert
} from './TagBasic';

const meta: Meta<typeof Tag> = {
  title: 'Data Display/Tag',
  component: Tag,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: TagDocumentation,
    },
  },
  args: {},
};

export default meta;
