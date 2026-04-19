import React from 'react';
import { Fieldset, Text, Button, Spacer } from '@geist-ui/core';

export const Basic = () => (
  <Fieldset width="500px">
    <Fieldset.Title>Project Name</Fieldset.Title>
    <Fieldset.Subtitle>The name of your project as it appears in Vercel.</Fieldset.Subtitle>
    <Text p>This will change the name of your project in the dashboard.</Text>
    <Fieldset.Footer>
      <Fieldset.Footer.Status>Actions are irreversible.</Fieldset.Footer.Status>
      <Fieldset.Footer.Actions>
        <Button auto scale={0.5} type="secondary">Save</Button>
      </Fieldset.Footer.Actions>
    </Fieldset.Footer>
  </Fieldset>
);

export const Group = () => (
  <div>
    <Fieldset>
      <Fieldset.Title>Email Address</Fieldset.Title>
      <Fieldset.Subtitle>The email address you use to sign in.</Fieldset.Subtitle>
      <Text p>user@example.com</Text>
      <Fieldset.Footer>
        <Text small>Last changed 2 days ago.</Text>
      </Fieldset.Footer>
    </Fieldset>
    <Spacer h={2} />
    <Fieldset type="error">
      <Fieldset.Title>Danger Zone</Fieldset.Title>
      <Fieldset.Subtitle>Permanently delete this project and all of its data.</Fieldset.Subtitle>
      <Text p>This action cannot be undone.</Text>
      <Fieldset.Footer>
        <Fieldset.Footer.Status>Proceed with caution.</Fieldset.Footer.Status>
        <Fieldset.Footer.Actions>
          <Button auto scale={0.5} type="error">Delete</Button>
        </Fieldset.Footer.Actions>
      </Fieldset.Footer>
    </Fieldset>
  </div>
);
