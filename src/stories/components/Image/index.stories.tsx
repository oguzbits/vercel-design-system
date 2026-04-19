import { Meta } from '@storybook/react';
import { Image } from '@geist-ui/core';

import ImageDocumentation from './Image.mdx';

export { 
  Basic,
  Skeleton,
  Browser,
  BrowserInvert,
  Compose,
  SVG
} from './ImageBasic';

const meta: Meta<typeof Image> = {
  title: 'Data Display/Image',
  component: Image,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: ImageDocumentation,
    },
  },
  args: {},
};

export default meta;
