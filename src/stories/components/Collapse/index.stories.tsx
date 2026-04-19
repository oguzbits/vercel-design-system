import { Meta } from '@storybook/react';
import { Collapse } from '@geist-ui/core';

import CollapseDocumentation from './Collapse.mdx';

export { 
  Basic,
  Expanded,
  Subtitle,
  Shadow
} from './CollapseBasic';

const meta: Meta<typeof Collapse> = {
  title: 'Surfaces/Collapse',
  component: Collapse,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: CollapseDocumentation,
    },
  },
  args: {},
};

export default meta;
