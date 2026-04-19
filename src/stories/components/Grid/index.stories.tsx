import { Meta } from '@storybook/react';
import { Grid } from '@/components/ui';
import GridDocumentation from './Grid.mdx';

export { 
  General,
  Fluid,
  Responsive,
  HideElements,
  AutoWidth
} from './GridBasic';

const meta: Meta<typeof Grid> = {
  title: 'Layout/Grid',
  component: Grid,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: GridDocumentation,
    },
    sidebar: {
      showChildren: false,
    },
  },
};

export default meta;
