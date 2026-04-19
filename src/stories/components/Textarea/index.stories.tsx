import { Meta } from '@storybook/react';
import { Textarea } from '@/components/ui';

import TextareaDocumentation from './Textarea.mdx';

export { 
  Basic,
  Width,
  Types,
  Status,
  Command
} from './TextareaBasic';

const meta: Meta<typeof Textarea> = {
  title: 'Data Entry/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: TextareaDocumentation,
    },
  },
  args: {},
};

export default meta;
