import { Meta } from '@storybook/react';
import { Description } from '@/components/ui';

import DescriptionDocumentation from './Description.mdx';

export { 
  Basic,
  WithComponent
} from './DescriptionBasic';

const meta: Meta<typeof Description> = {
  title: 'Data Display/Description',
  component: Description,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: DescriptionDocumentation,
    },
  },
  args: {},
};

export default meta;
