import { Meta } from '@storybook/react';
import { Modal } from '@geist-ui/core';

export { Default } from './ModalDefault';
export { Actions } from './ModalActions';

export default {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Best Practices

#### Usage
- **Do** use modals for tasks that require the user's immediate attention and focus.
- **Do** keep the modal content simple and focused on a single task.
- **Do** provide clear labels for all actions within the modal (e.g., "Submit", "Cancel").
- **Don't** use modals for complex multi-step workflows; consider a separate page or a \`Drawer\` instead.

#### Design
- **Do** use \`Modal.Title\` and \`Modal.Subtitle\` consistently across your application.
- **Do** use \`Modal.Action\` with \`type="error"\` for destructive confirmations.
- **Don't** allow the modal to overflow the viewport height excessively; keep content scrollable within \`Modal.Content\` if necessary.

### Accessibility
- Modals **must** trap focus within the dialog while active.
- The first focusable element should be focused upon opening (handled by Geist UI).
- Modals can be closed using the \`Esc\` key or by clicking the backdrop (unless disabled).
- Modals use \`role="dialog"\` and \`aria-modal="true"\` to ensure screen readers identify them correctly.
- Ensure that the modal title is descriptive and unique.
        `,
      },
    },
  },
} as Meta;
