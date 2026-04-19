import { Meta } from '@storybook/react';
import { Fieldset } from '@geist-ui/core';

export { Default } from './FieldsetDefault';
export { Group } from './FieldsetGroup';

export default {
  title: 'Components/Fieldset',
  component: Fieldset,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Best Practices

#### Usage
- **Do** use fieldsets to group related form controls or information together under a shared title.
- **Do** use \`Fieldset.Title\` and \`Fieldset.Subtitle\` to provide context for the grouped content.
- **Do** use \`Fieldset.Footer\` to house tertiary information, links, or specific actions related ONLY to that fieldset.
- **Don't** over-nest fieldsets; keep the structure flat and easy to scan.

#### Design
- **Do** maintain consistent spacing between multiple fieldsets on a single page.
- **Do** use the footer to separate secondary actions from the primary content area.
- **Don't** put too many form fields inside a single fieldset; if it grows too long, consider multiple fieldsets or a dedicated page.

### Accessibility
- Semantic \`fieldset\` and \`legend\` tags are used to ensure the relationship between fields is clear to assistive technologies (handled by Geist UI).
- Ensure that the title provided in \`Fieldset.Title\` is descriptive and identifies the purpose of the group.
- Interactive elements inside the fieldset footer should follow standard keyboard and screen reader accessibility patterns.
- Color alone should not be used to indicate the completion state of a fieldset; use icons or text.
        `,
      },
    },
  },
} as Meta;
