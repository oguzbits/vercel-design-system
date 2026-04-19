import { Meta } from '@storybook/react';
import { Note } from '@geist-ui/core';

import NoteDocumentation from './Note.mdx';

export { 
  Basic,
  Type,
  Label,
  Filled
} from './NoteBasic';

const meta: Meta<typeof Note> = {
  title: 'Feedback/Note',
  component: Note,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: NoteDocumentation,
    },
  },
  args: {},
};

export default meta;
