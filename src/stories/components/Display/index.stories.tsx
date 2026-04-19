import { Meta } from '@storybook/react';
import { Display } from '@/components/ui';
import DisplayDocumentation from './Display.mdx';

export { 
  Basic,
  CustomCaption
} from './DisplayBasic';

const meta: Meta<typeof Display> = {
  title: 'Layout/Display',
  component: Display,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: DisplayDocumentation,
    },
    sidebar: {
      showChildren: false,
    },
  },
};

export default meta;
