import React from 'react';
import { Display, Code } from '@geist-ui/core';

export const Shadow = () => {
  const code = `
const App = () => (
  <GeistProvider>
    <CssBaseline />
    <Component {...pageProps} />
  </GeistProvider>
)
  `;
  
  return (
    <div style={{ padding: '20px', maxWidth: '800px' }}>
      <Display shadow caption="Wrap your application with GeistProvider to enable design system tokens.">
        <Code block>{code}</Code>
      </Display>
    </div>
  );
};
Shadow.storyName = 'Shadow Variation';
