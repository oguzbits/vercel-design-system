import { Meta } from '@storybook/react';
import { Link } from '@geist-ui/core';

export { Basic, External } from './LinkBasic';

export default {
  title: 'Navigation/Link',
  component: Link,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Hyperlinks to navigate between pages or sections.',
      },
    },
  },
} as Meta;
