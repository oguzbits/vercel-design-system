import React from 'react';
import { ButtonDropdown, Spacer, Text } from '@geist-ui/core';

export const Type = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <Text small b>Success</Text>
      <ButtonDropdown type="success" auto>
        <ButtonDropdown.Item main>Confirm Action</ButtonDropdown.Item>
        <ButtonDropdown.Item>Download Receipt</ButtonDropdown.Item>
      </ButtonDropdown>
      
      <Spacer />
      
      <Text small b>Secondary</Text>
      <ButtonDropdown type="secondary" auto>
        <ButtonDropdown.Item main>Save Draft</ButtonDropdown.Item>
        <ButtonDropdown.Item>Discard Changes</ButtonDropdown.Item>
      </ButtonDropdown>

      <Spacer />
      
      <Text small b>Warning</Text>
      <ButtonDropdown type="warning" auto>
        <ButtonDropdown.Item main>Update Firmware</ButtonDropdown.Item>
        <ButtonDropdown.Item>Reboot System</ButtonDropdown.Item>
      </ButtonDropdown>

      <Spacer />
      
      <Text small b>Error / Destructive</Text>
      <ButtonDropdown type="error" auto shadow>
        <ButtonDropdown.Item main>Delete Account</ButtonDropdown.Item>
        <ButtonDropdown.Item>Transfer Ownership</ButtonDropdown.Item>
      </ButtonDropdown>
    </div>
  );
};
Type.storyName = 'Status Colors';
