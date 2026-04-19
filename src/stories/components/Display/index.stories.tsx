import { Meta } from '@storybook/react';
import { Display } from '@geist-ui/core';
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
