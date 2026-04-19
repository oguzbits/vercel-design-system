import { Meta } from '@storybook/react';
import { Rating } from '@/components/ui';

export { Basic, Locked } from './RatingBasic';

export default {
  title: 'Data Display/Rating',
  component: Rating,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Display a rating from user input.',
      },
    },
  },
} as Meta;
