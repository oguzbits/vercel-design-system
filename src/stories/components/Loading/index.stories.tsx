import { Meta } from '@storybook/react';
import { Loading } from '@geist-ui/core';

import LoadingDocumentation from './Loading.mdx';

export { 
  Basic,
  Text,
  Type,
  Color
} from './LoadingBasic';

const meta: Meta<typeof Loading> = {
  title: 'Feedback/Loading',
  component: Loading,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: LoadingDocumentation,
    },
  },
  args: {},
};

export default meta;
