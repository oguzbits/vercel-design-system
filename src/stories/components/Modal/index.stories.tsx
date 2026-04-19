import { Meta } from '@storybook/react';
import { Modal } from '@geist-ui/core';

export { Basic } from './ModalBasic';

export default {
  title: 'Feedback/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Display a dialog box, typically for a critical action or information.',
      },
    },
  },
} as Meta;
