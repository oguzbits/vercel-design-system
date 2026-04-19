import { Meta } from '@storybook/react';
import { Code } from '@/components/ui';
import CodeDocumentation from './Code.mdx';

export { 
  Basic, 
  CodeBlock, 
  Width, 
  Name, 
  ClassicStyle 
} from './CodeBasic';

const meta: Meta<typeof Code> = {
  title: 'General/Code',
  component: Code,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: CodeDocumentation,
    },
    sidebar: {
      showChildren: false,
    },
  },
};

export default meta;
