import React from 'react';
import { Button, Spacer } from '@geist-ui/core';

export const Type = () => (
  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
    <Button type="default">Default</Button>
    <Button type="secondary">Secondary</Button>
    <Button type="success">Success</Button>
    <Button type="warning">Warning</Button>
    <Button type="error">Error</Button>
    <Button type="abort">Abort</Button>
  </div>
);

Type.parameters = {
  docs: {
    description: {
      story: 'Geist Buttons use the `type` prop to define semantic intent.\n\n' +
             '- `default`: The standard neutral action.\n' +
             '- `secondary`: High-contrast action (standard for primary button in Geist).\n' +
             '- `success`: Positive confirmation action.\n' +
             '- `warning`: Potential risk action.\n' +
             '- `error`: Dangerous or destructive action.\n' +
             '- `abort`: Low-emphasis dismissal action.',
    },
  },
};
