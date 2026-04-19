import { Meta } from '@storybook/react';
import { Modal } from '@geist-ui/core';

import ModalDocumentation from './Modal.mdx';

export { 
  Basic,
  WithoutActions,
  CustomContent
} from './ModalBasic';

const meta: Meta<typeof Modal> = {
  title: 'Feedback/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: ModalDocumentation,
    },
  },
  args: {},
};

export default meta;
