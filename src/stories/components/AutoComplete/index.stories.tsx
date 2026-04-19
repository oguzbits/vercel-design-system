import { Meta } from '@storybook/react';
import { AutoComplete } from '@geist-ui/core';

export { Default } from './AutoCompleteDefault';
export { Searching } from './AutoCompleteSearching';

export default {
  title: 'Components/AutoComplete',
  component: AutoComplete,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Best Practices

#### Usage
- **Do** use \`AutoComplete\` when the user needs to select from a large list of options that can be filtered by typing.
- **Do** provide a clear \`placeholder\` to indicate what kind of data is expected.
- **Do** use the \`searching\` prop to provide visual feedback during asynchronous searches.
- **Don't** use \`AutoComplete\` if the number of options is very small (less than 5-10); a standard \`Select\` is usually simpler.

#### Behavior
- **Do** handle the \`onSearch\` event to update options as the user types.
- **Do** consider using \`clearable\` for optional inputs to allow users to reset the field easily.
- **Don't** overwhelm the user with too many results; limit the dropdown to the most relevant matches.

### Accessibility
- \`AutoComplete\` must support standard keyboard interactions (Arrows to navigate options, Enter/Space to select).
- Ensure the input is correctly labeled and associated with the dropdown list using ARIA attributes (\`aria-autocomplete\`, \`aria-controls\`).
- The \`searching\` state should be announced if it takes a significant amount of time (standard Geist implementation handles the visual spinner).
- Use clear labels and ARIA descriptions for custom option components if applicable.
        `,
      },
    },
  },
} as Meta;
