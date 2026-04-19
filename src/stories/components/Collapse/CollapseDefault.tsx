import React from 'react';
import { Collapse, Text } from '@geist-ui/core';

export const Default = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <Collapse title="Question A">
        <Text p>
          Collapse is useful for showing large amounts of content that isn't always necessary for the user to see, such as FAQs or detailed descriptions.
        </Text>
      </Collapse>
      <Collapse title="Question B" subtitle="More details available here">
        <Text p>
          You can provide a subtitle to give the user a preview of what's inside the collapsed section.
        </Text>
      </Collapse>
    </div>
  );
};
Default.storyName = 'Default';
