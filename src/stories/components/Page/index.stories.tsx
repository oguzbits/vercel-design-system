import { Meta } from '@storybook/react';
import { Page } from '@geist-ui/core';
import PageDocumentation from './Page.mdx';

export { 
  Basic,
  Content
} from './PageBasic';

const meta: Meta<typeof Page> = {
  title: 'Layout/Page',
  component: Page,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: PageDocumentation,
    },
    sidebar: {
      showChildren: false,
    },
  },
};

export default meta;
