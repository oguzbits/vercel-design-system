import React from 'react';
import { Fieldset, Tabs, Text, Input, Spacer } from '@geist-ui/core';

export const Group = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <Tabs initialValue="1">
        <Tabs.Item label="General" value="1">
          <Spacer h={1} />
          <Fieldset>
            <Fieldset.Title>Build Settings</Fieldset.Title>
            <Fieldset.Subtitle>Choose your configuration for the build process.</Fieldset.Subtitle>
            <Fieldset.Content>
              <Input label="Build Command" placeholder="npm run build" width="100%" />
              <Spacer h={1} />
              <Input label="Output Directory" placeholder=".next" width="100%" />
            </Fieldset.Content>
            <Fieldset.Footer>
              <Text small>Learn more about <a href="#">Build Commands</a>.</Text>
            </Fieldset.Footer>
          </Fieldset>
          
          <Spacer h={2} />
          
          <Fieldset>
            <Fieldset.Title>Environmental Variables</Fieldset.Title>
            <Fieldset.Subtitle>Manage keys and secrets for your application.</Fieldset.Subtitle>
            <Fieldset.Content>
               <Text p>You can add variables to be used in your build and runtime.</Text>
            </Fieldset.Content>
            <Fieldset.Footer>
              <Fieldset.Footer.Actions>
                 <button style={{ 
                    border: '1px solid #eaeaea', 
                    background: 'white', 
                    padding: '6px 12px', 
                    borderRadius: '4px',
                    fontSize: '14px',
                    cursor: 'pointer'
                  }}>Learn More</button>
              </Fieldset.Footer.Actions>
            </Fieldset.Footer>
          </Fieldset>
        </Tabs.Item>
        <Tabs.Item label="Domains" value="2">
           <Text p>Domain settings placeholder.</Text>
        </Tabs.Item>
      </Tabs>
    </div>
  );
};
Group.storyName = 'Setting Groups';
