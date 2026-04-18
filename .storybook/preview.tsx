import React from 'react';
import type { Preview } from '@storybook/react';
import { GeistProvider, CssBaseline } from '@geist-ui/core';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo'
    }
  },
  decorators: [
    (Story) => (
      <GeistProvider>
        <CssBaseline />
        <Story />
      </GeistProvider>
    ),
  ],
};

export default preview;
