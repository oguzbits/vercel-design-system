import { Meta } from '@storybook/react';
import { Divider } from '@geist-ui/core';
import DividerDocumentation from './Divider.mdx';

export { 
  Basic,
  Alignment,
  Types
} from './DividerBasic';

const meta: Meta<typeof Divider> = {
  title: 'Data Display/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: DividerDocumentation,
    },
    sidebar: {
      showChildren: false,
    },
  },
};

export default meta;
