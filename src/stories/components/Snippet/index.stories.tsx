import { Meta } from '@storybook/react';
import { Snippet } from '@/components/ui';

import SnippetDocumentation from './Snippet.mdx';

export { 
  Basic,
  Width,
  Types,
  MultiLine,
  WithoutCopy,
  CustomSymbol,
  CustomToast,
  Filled
} from './SnippetBasic';

const meta: Meta<typeof Snippet> = {
  title: 'Others/Snippet',
  component: Snippet,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: SnippetDocumentation,
    },
  },
  args: {},
};

export default meta;
