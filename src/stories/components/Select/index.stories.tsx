import { Meta } from '@storybook/react';
import { Select } from '@/components/ui/Select';

import SelectDocumentation from './Select.mdx';

export { 
  Basic,
  Type,
  Disabled,
  DisabledOption,
  Pure,
  Labels,
  Divider,
  Multiple,
  MultipleWithoutClear,
  Compose,
  OverWidthIndices,
  SetParentElement
} from './SelectBasic';

const meta: Meta<typeof Select> = {
  title: 'Data Entry/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: SelectDocumentation,
    },
  },
  args: {},
};

export default meta;
