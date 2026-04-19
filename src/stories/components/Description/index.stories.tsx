import { Meta } from '@storybook/react';
import { Description } from '@geist-ui/core';

export { Basic, CustomContent } from './DescriptionBasic';

export default {
  title: 'Data Display/Description',
  component: Description,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Description is used to display a title and content pair.',
      },
    },
  },
} as Meta;
