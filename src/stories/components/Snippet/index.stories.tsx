import { Meta } from '@storybook/react';
import { Snippet } from '@geist-ui/core';

export { Basic, MultiLine, NoCopy } from './SnippetBasic';

export default {
  title: 'Data Display/Snippet',
  component: Snippet,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Display a code snippet to be copied.',
      },
    },
  },
} as Meta;
