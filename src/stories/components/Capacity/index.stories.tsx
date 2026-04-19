import { Meta } from '@storybook/react';
import { Capacity } from '@/components/ui';

import CapacityDocumentation from './Capacity.mdx';

export { 
  Basic,
  FixedColor
} from './CapacityBasic';

const meta: Meta<typeof Capacity> = {
  title: 'Data Display/Capacity',
  component: Capacity,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: CapacityDocumentation,
    },
  },
  args: {},
};

export default meta;
