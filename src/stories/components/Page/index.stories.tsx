import { Meta } from '@storybook/react';
import { Page } from '@geist-ui/core';

export { Basic } from './PageBasic';

export default {
  title: 'Layout/Page',
  component: Page,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Default container for a page, including Header, Content and Footer.',
      },
    },
  },
} as Meta;
