import { Meta } from '@storybook/react';
import { Radio } from '@geist-ui/core';

export { Basic, Descriptions, Row } from './RadioBasic';

export default {
  title: 'Data Entry/Radio',
  component: Radio,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Allow the user to select one option from a set.',
      },
    },
  },
} as Meta;
