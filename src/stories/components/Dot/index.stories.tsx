import { Meta } from '@storybook/react';
import { Dot } from '@/components/ui';

import DotDocumentation from './Dot.mdx';

export { 
  Basic,
  Text
} from './DotBasic';

const meta: Meta<typeof Dot> = {
  title: 'Data Display/Dot',
  component: Dot,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: DotDocumentation,
    },
  },
  args: {},
};

export default meta;
