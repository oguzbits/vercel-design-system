import { Meta } from '@storybook/react';
import { AutoComplete } from '@geist-ui/core';

export { Basic, Searching } from './AutoCompleteBasic';

export default {
  title: 'Data Entry/AutoComplete',
  component: AutoComplete,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'AutoComplete is a text input with suggestions.',
      },
    },
  },
} as Meta;
