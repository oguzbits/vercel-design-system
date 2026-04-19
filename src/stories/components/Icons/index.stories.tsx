import { Meta } from '@storybook/react';
import { Github } from '@geist-ui/icons';
import IconsDocumentation from './Icons.mdx';

export { 
  Import,
  Color,
  Sizes,
  Gallery
} from './IconsBasic';

const meta: Meta<typeof Github> = {
  title: 'General/Icons',
  component: Github,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: IconsDocumentation,
    },
    sidebar: {
      showChildren: false,
    },
  },
};

export default meta;
