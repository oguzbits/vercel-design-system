import { Meta } from '@storybook/react';
import { Checkbox } from '@/components/ui';

import CheckboxDocumentation from './Checkbox.mdx';

export { 
  Basic,
  Sizes,
  Type,
  Disabled,
  Group
} from './CheckboxBasic';

const meta: Meta<typeof Checkbox> = {
  title: 'Data Entry/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: CheckboxDocumentation,
    },
  },
  args: {},
};

export default meta;
