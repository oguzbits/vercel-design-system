import { Meta } from '@storybook/react';
import { Spinner } from '@/components/ui';

import SpinnerDocumentation from './Spinner.mdx';

export { 
  Basic
} from './SpinnerBasic';

const meta: Meta<typeof Spinner> = {
  title: 'Feedback/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: SpinnerDocumentation,
    },
  },
  args: {},
};

export default meta;
