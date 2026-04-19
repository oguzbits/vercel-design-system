import { Meta } from '@storybook/react';
import { Tooltip } from '@/components/ui';

import TooltipDocumentation from './Tooltip.mdx';

export { 
  Basic,
  Types,
  Placement,
  CustomContent
} from './TooltipBasic';

const meta: Meta<typeof Tooltip> = {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: TooltipDocumentation,
    },
  },
  args: {},
};

export default meta;
