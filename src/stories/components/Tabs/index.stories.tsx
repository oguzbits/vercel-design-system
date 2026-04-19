import { Meta } from '@storybook/react';
import { Tabs } from '@/components/ui';

import TabsDocumentation from './Tabs.mdx';

export { 
  Basic,
  Disabled,
  Icon,
  HideDivider
} from './TabsBasic';

const meta: Meta<typeof Tabs> = {
  title: 'Navigation/Tabs',
  component: Tabs as any,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: TabsDocumentation,
    },
  },
  args: {},
};

export default meta;
