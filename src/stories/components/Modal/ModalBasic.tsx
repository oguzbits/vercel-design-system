import React, { useState } from 'react';
import { Modal, Button, Text } from '@geist-ui/core';

export const Basic = () => {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log('closed');
  };
  return (
    <div>
      <Button auto onClick={handler}>Show Modal</Button>
      <Modal visible={visible} onClose={closeHandler}>
        <Modal.Title>Modal</Modal.Title>
        <Modal.Subtitle>This is a subtitle</Modal.Subtitle>
        <Modal.Content>
          <Text p>Some content in the modal.</Text>
        </Modal.Content>
        <Modal.Action passive onClick={() => setVisible(false)}>Cancel</Modal.Action>
        <Modal.Action onClick={() => setVisible(false)}>Submit</Modal.Action>
      </Modal>
    </div>
  );
};
