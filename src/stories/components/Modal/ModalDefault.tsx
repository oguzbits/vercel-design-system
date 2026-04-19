import React, { useState } from 'react';
import { Modal, Button, Text } from '@geist-ui/core';

export const Default = () => {
  const [state, setState] = useState(false);
  const handler = () => setState(true);
  const closeHandler = () => {
    setState(false);
    console.log('closed');
  };

  return (
    <div style={{ padding: '40px' }}>
      <Button auto onClick={handler}>Open Modal</Button>
      <Modal visible={state} onClose={closeHandler}>
        <Modal.Title>Modern Modal</Modal.Title>
        <Modal.Subtitle>This is a subtitle for more context.</Modal.Subtitle>
        <Modal.Content>
          <Text p>
            Geist UI modals provide a clean, centered interface for focusing user attention on specific tasks or information without leaving the current context.
          </Text>
        </Modal.Content>
        <Modal.Action passive onClick={() => setState(false)}>Cancel</Modal.Action>
        <Modal.Action onClick={() => setState(false)}>Submit</Modal.Action>
      </Modal>
    </div>
  );
};
Default.storyName = 'Default';
