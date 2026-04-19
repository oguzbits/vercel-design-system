import { Meta } from '@storybook/react';
import { ButtonDropdown } from '@geist-ui/core';

export { Basic, Types, Loading } from './ButtonDropdownBasic';

export default {
  title: 'Navigation/Button Dropdown',
  component: ButtonDropdown,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Action buttons with dropdown menu options.',
      },
    },
  },
} as Meta;
