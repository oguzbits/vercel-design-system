import { Meta } from '@storybook/react';
import { useToasts } from '@geist-ui/core';

import ToastDocumentation from './Toast.mdx';

export { 
  Basic,
  Type,
  Action,
  Multiline
} from './ToastBasic';

const meta: Meta<any> = {
  title: 'Feedback/Toast',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: ToastDocumentation,
    },
  },
};

export default meta;
