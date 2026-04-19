import { Meta } from '@storybook/react';
import { Card } from '@geist-ui/core';

export { Default } from './CardDefault';
export { Hoverable } from './CardHoverable';
export { Type } from './CardType';
export { Actions } from './CardActions';

export default {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Best Practices

#### Usage
- **Do** use \`Card\` to group related content, actions, and information into a single digestible surface.
- **Do** utilize \`Card.Content\` and \`Card.Footer\` to create a clear structural hierarchy within the card.
- **Do** use the \`hoverable\` prop for cards that act as navigation elements or interactive dashboard tiles.
- **Don't** use cards for single pieces of information that don't benefit from being grouped in a contained surface.

#### Layout
- **Do** use \`shadow\` to create depth and separate important cards from the page background.
- **Do** keep card footers simple, typically containing secondary actions or metadata.
- **Don't** nest complex components like \`Modal\` or \`Drawer\` inside a \`Card\`.

### Accessibility
- If a card is interactive (e.g., clickable), ensure it has a proper focus ring and keyboard support.
- Use heading tags (\`Text h4\`, \`Text h5\`) within the card to provide a clear content hierarchy for screen readers.
- If a card contains a link, the entire card surface should not necessarily be the link unless clearly indicated.
- Ensure that the color contrast for status-based cards (\`success\`, \`error\`) meets accessibility standards.
        `,
      },
    },
  },
} as Meta;
