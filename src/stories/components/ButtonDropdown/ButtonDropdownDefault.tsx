import React from 'react';
import { ButtonDropdown } from '@geist-ui/core';

export const Default = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <ButtonDropdown>
        <ButtonDropdown.Item main>Deploy to Production</ButtonDropdown.Item>
        <ButtonDropdown.Item>Deploy to Preview</ButtonDropdown.Item>
        <ButtonDropdown.Item>Archive Build</ButtonDropdown.Item>
      </ButtonDropdown>
    </div>
  );
};
Default.storyName = 'Default';
