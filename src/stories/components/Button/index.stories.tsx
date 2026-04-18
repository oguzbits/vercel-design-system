import { Meta } from '@storybook/react';
import { Button } from '@geist-ui/core';

export { Default } from './ButtonDefault';
export { Type } from './ButtonType';
export { Icon } from './ButtonIcon';
export { Loading } from './ButtonLoading';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `
### Best Practices

#### Layout
- For the primary action in a group, use a secondary type to draw attention.
- Limit the number of primary buttons per page.
- Use ghost buttons for secondary actions.

#### Content
- Use clear, action-oriented labels.
- Button text should be short and predictable.
        `,
      },
    },
  },
} as Meta;
