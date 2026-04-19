import { Meta } from '@storybook/react';
import { Loading } from '@geist-ui/core';

export { Basic, Types, TextColor } from './LoadingBasic';

export default {
  title: 'Feedback/Loading',
  component: Loading,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Indicate an action is running.',
      },
    },
  },
} as Meta;
