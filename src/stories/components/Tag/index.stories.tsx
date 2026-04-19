import { Meta } from '@storybook/react';
import { Tag } from '@geist-ui/core';

export { Basic, Invert } from './TagBasic';

export default {
  title: 'Data Display/Tag',
  component: Tag,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Display a small tag for status or categories.',
      },
    },
  },
} as Meta;
