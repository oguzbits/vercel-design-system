import React from 'react';
import { Fieldset, Input, Text } from '@geist-ui/core';

export const Default = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <Fieldset>
        <Fieldset.Title>Project Settings</Fieldset.Title>
        <Fieldset.Subtitle>Configure how your project behaves on Vercel.</Fieldset.Subtitle>
        <Fieldset.Content>
          <Text p>These settings apply to all deployments in this project.</Text>
          <Input placeholder="Project Name" width="100%" />
        </Fieldset.Content>
        <Fieldset.Footer>
          <Fieldset.Footer.Status>
            Settings shown are for the production environment.
          </Fieldset.Footer.Status>
          <Fieldset.Footer.Actions>
            <button style={{ 
              background: 'black', 
              color: 'white', 
              border: 'none', 
              padding: '6px 12px', 
              borderRadius: '4px',
              fontSize: '14px',
              cursor: 'pointer'
            }}>Save Changes</button>
          </Fieldset.Footer.Actions>
        </Fieldset.Footer>
      </Fieldset>
    </div>
  );
};
Default.storyName = 'Default Card';
