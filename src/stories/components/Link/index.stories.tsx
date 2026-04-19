import { Meta } from '@storybook/react';
import { Link } from '@/components/ui';

import LinkDocumentation from './Link.mdx';

export { 
  Basic,
  Highlight,
  Underline,
  Icon,
  Block
} from './LinkBasic';

const meta: Meta<typeof Link> = {
  title: 'General/Link',
  component: Link,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: LinkDocumentation,
    },
  },
  args: {},
};

export default meta;
