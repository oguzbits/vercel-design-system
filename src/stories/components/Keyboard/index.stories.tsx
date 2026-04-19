import { Meta } from '@storybook/react';
import { Keyboard } from '@/components/ui';

import KeyboardDocumentation from './Keyboard.mdx';

export { 
  Basic,
  Modifiers,
  Combination
} from './KeyboardBasic';

const meta: Meta<typeof Keyboard> = {
  title: 'Data Display/Keyboard',
  component: Keyboard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: KeyboardDocumentation,
    },
  },
  args: {},
};

export default meta;
