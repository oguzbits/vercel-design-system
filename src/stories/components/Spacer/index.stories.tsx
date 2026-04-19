import { Meta } from '@storybook/react';
import { Spacer } from '@geist-ui/core';
import SpacerDocumentation from './Spacer.mdx';

export { 
  Vertical,
  Horizontal
} from './SpacerBasic';

const meta: Meta<typeof Spacer> = {
  title: 'Layout/Spacer',
  component: Spacer,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: SpacerDocumentation,
    },
    sidebar: {
      showChildren: false,
    },
  },
};

export default meta;
