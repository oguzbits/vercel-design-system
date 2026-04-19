import { Meta } from '@storybook/react';
import { Input } from '@/components/ui';

import InputDocumentation from './Input.mdx';

export { 
  Basic,
  Sizes,
  Width,
  Unwritable,
  InlineLabel,
  BlockLabel,
  Type,
  Icon,
  Clearable,
  Password,
  GetChange,
  ImperativeAPI
} from './InputBasic';

const meta: Meta<typeof Input> = {
  title: 'Data Entry/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: InputDocumentation,
    },
  },
  args: {},
};

export default meta;
