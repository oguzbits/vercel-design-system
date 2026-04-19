import { Meta } from '@storybook/react';
import { Tree } from '@/components/ui/Tree';

import TreeDocumentation from './Tree.mdx';

export { 
  Basic,
  InitialExpand,
  Imperative
} from './TreeBasic';

const meta: Meta<typeof Tree> = {
  title: 'Data Display/Tree',
  component: Tree,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: TreeDocumentation,
    },
  },
  args: {},
};

export default meta;
