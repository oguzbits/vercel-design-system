import { Meta } from '@storybook/react';
import { Button } from '@geist-ui/core';
import ButtonDocumentation from './Button.mdx';

export { 
  Basic, 
  Loading, 
  Types, 
  Ghost, 
  Disabled, 
  Icons, 
  Sizes 
} from './ButtonBasic';

const meta: Meta<typeof Button> = {
  title: 'General/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: ButtonDocumentation,
    },
    sidebar: {
      showChildren: false,
    },
  },
};

export default meta;
