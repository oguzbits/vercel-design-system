import React, { useState } from 'react';
import { Modal, Button, Text, Note } from '@geist-ui/core';

export const Actions = () => {
  const [state, setState] = useState(false);
  const handler = () => setState(true);

  return (
    <div style={{ padding: '40px' }}>
      <Button auto type="error" onClick={handler}>Delete Project</Button>
      <Modal visible={state} onClose={() => setState(false)}>
        <Modal.Title>Critical Action</Modal.Title>
        <Modal.Content>
          <Note type="error" label="Warning">
            This action cannot be undone. All project data will be lost permanently.
          </Note>
          <Text p>Are you absolutely sure you want to delete this project?</Text>
        </Modal.Content>
        <Modal.Action passive onClick={() => setState(false)}>Keep Project</Modal.Action>
        <Modal.Action loading onClick={() => setState(false)}>Loading State</Modal.Action>
        <Modal.Action type="error" onClick={() => setState(false)}>Delete Permanently</Modal.Action>
      </Modal>
    </div>
  );
};
Actions.storyName = 'Action Variations';
