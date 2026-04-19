import { Meta } from '@storybook/react';
import { Note } from '@geist-ui/core';

export { Default } from './NoteDefault';
export { Type } from './NoteType';
export { Filled } from './NoteFilled';

export default {
  title: 'Components/Note',
  component: Note,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Best Practices

#### Usage
- **Do** use notes to highlight specific, relevant information that the user should be aware of within a certain context.
- **Do** utilize semantic types (\`success\`, \`warning\`, \`error\`) to communicate the nature of the message at a glance.
- **Do** customize the \`label\` if the default "NOTE" isn't descriptive enough (e.g., "HINT", "STOP", "PRO TIP").
- **Don't** use notes for primary page content; they are intended for auxiliary or supplemental information.

#### Design
- **Do** keep the note content concise and readable.
- **Do** use the \`filled\` prop for high-priority alerts that need to immediately catch the user's eye.
- **Don't** clutter a page with too many notes; they lose their impact if overused.

### Accessibility
- Use the appropriate \`type\` so that screen readers can convey the correct "status" or "alert" role (handled by Geist UI).
- Ensure that the color contrast for both standard and \`filled\` notes meets accessibility standards.
- If a note contains critical instructions, ensure the text is clear and doesn't rely on color alone to convey meaning.
- Background colors should never interfere with the legibility of the overlapping text.
        `,
      },
    },
  },
} as Meta;
