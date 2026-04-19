import { Meta } from '@storybook/react';
import { Spinner } from '@geist-ui/core';

export { Basic, Sizes } from './SpinnerBasic';

export default {
  title: 'Feedback/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Display a spinner to indicate a loading state.',
      },
    },
  },
} as Meta;
