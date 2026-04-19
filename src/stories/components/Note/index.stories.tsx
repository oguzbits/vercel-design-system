import { Meta } from '@storybook/react';
import { Note } from '@geist-ui/core';

export { Basic, Types, Filled } from './NoteBasic';

export default {
  title: 'Data Display/Note',
  component: Note,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Display a short message to the user.',
      },
    },
  },
} as Meta;
