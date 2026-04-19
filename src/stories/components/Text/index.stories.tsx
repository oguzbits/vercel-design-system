import { Meta } from '@storybook/react';
import { Text } from '@geist-ui/core';
import TextDocumentation from './Text.mdx';

export { 
  Headings, 
  Paragraph, 
  Small, 
  Blockquote, 
  Types, 
  Sizes, 
  Compose 
} from './TextBasic';

const meta: Meta<typeof Text> = {
  title: 'General/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: TextDocumentation,
    },
    sidebar: {
      showChildren: false,
    },
  },
};

export default meta;
