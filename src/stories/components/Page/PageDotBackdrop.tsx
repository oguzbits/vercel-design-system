import React from 'react';
import { Page, Text, Spacer, Display, Code } from '@geist-ui/core';

export const DotBackdrop = () => {
  return (
    <div style={{ width: '100%' }}>
      <Page dotBackdrop>
        <Page.Content>
          <Display shadow title="Styled Page" caption="Vercel inspired dot backdrop">
            <Text p>
              Use the <Code>dotBackdrop</Code> prop to add the iconic dotted background pattern characteristic of Vercel's design language.
            </Text>
          </Display>
        </Page.Content>
      </Page>
    </div>
  );
};
DotBackdrop.storyName = 'Dot Backdrop';
