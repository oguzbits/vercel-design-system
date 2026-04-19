import React from 'react';
import { Code, Text } from '@geist-ui/core';

export const Default = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <Text p>
        You can use <Code>Code</Code> for inline snippets.
      </Text>
      <Text b>Block Code:</Text>
      <Code block my={1}>{`npm install @geist-ui/core`}</Code>
      <Code block name="main.js" my={1}>{`console.log("Hello, world!");`}</Code>
    </div>
  );
};
Default.storyName = 'Default';
