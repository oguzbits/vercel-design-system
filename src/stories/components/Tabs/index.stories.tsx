import { Meta } from '@storybook/react';
import { Tabs } from '@geist-ui/core';

export { Default } from './TabsDefault';
export { Highlight } from './TabsHighlight';
export { Icons } from './TabsIcons';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Best Practices

#### Usage
- **Do** use tabs to organize content that is at the same level of hierarchy and is related.
- **Do** use clear, concise labels that indicate what content is within the tab.
- **Do** use the \`highlight\` prop to provide a more dynamic Vercel-like interaction fee.
- **Don't** use tabs for navigation that takes the user to a completely different part of the application; use a \`Menu\` or \`Breadcrumbs\` instead.

#### Content
- **Do** keep the number of tabs manageable (usually 2-6); if you have more, consider a vertical navigation pattern.
- **Do** ensure that the most important or frequently used tab is selected by default.
- **Don't** use tabs if the content within them is significantly different in format or purpose.

### Accessibility
- Tabs follow the WAI-ARIA tabpanel pattern.
- Navigation between tabs is handled with arrow keys (\`Left/Right\`).
- \`Tab\` key moves the focus into the active tab's content panel.
- Geist UI automatically manages \`role="tablist"\`, \`role="tab"\`, and \`role="tabpanel"\` for correct screen reader identification.
- Ensure that the color contrast for both active and inactive tabs meets WCAG standards.
        `,
      },
    },
  },
} as Meta;
