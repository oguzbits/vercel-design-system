import { Meta } from '@storybook/react';
import { Toggle } from '@/components/ui';

import ToggleDocumentation from './Toggle.mdx';

export { 
  Basic,
  Type,
  Disabled,
  GetChange
} from './ToggleBasic';

const meta: Meta<typeof Toggle> = {
  title: 'Data Entry/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: ToggleDocumentation,
    },
  },
  args: {},
};

export default meta;
