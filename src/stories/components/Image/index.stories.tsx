import { Meta } from '@storybook/react';
import { Image } from '@geist-ui/core';

export { Basic, Browser, Skeleton } from './ImageBasic';

export default {
  title: 'Data Display/Image',
  component: Image,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Display images with a loading skeleton and optional browser frame.',
      },
    },
  },
} as Meta;
