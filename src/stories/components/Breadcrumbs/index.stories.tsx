import { Meta } from '@storybook/react';
import { Breadcrumbs } from '@geist-ui/core';

import BreadcrumbsDocumentation from './Breadcrumbs.mdx';

export { 
  Basic,
  Separator
} from './BreadcrumbsBasic';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs as any,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: BreadcrumbsDocumentation,
    },
  },
  args: {},
};

export default meta;
