import React from 'react';
import { Modal, Button, useModal, Text } from '@geist-ui/core';

export const Basic = {
  tags: ['!sidebar'],
  render: function Render() {
    const { visible, setVisible, bindings } = useModal();
    return (
      <>
        <Button auto onClick={() => setVisible(true)}>Show Modal</Button>
        <Modal {...bindings}>
          <Modal.Title>Modal</Modal.Title>
          <Modal.Subtitle>This is a modal</Modal.Subtitle>
          <Modal.Content>
            <p>Some content contained within the modal.</p>
          </Modal.Content>
          <Modal.Action passive onClick={() => setVisible(false)}>Cancel</Modal.Action>
          <Modal.Action onClick={() => setVisible(false)}>Submit</Modal.Action>
        </Modal>
      </>
    );
  }
};

export const WithoutActions = {
  tags: ['!sidebar'],
  render: function Render() {
    const { visible, setVisible, bindings } = useModal();
    return (
      <>
        <Button auto onClick={() => setVisible(true)}>Show Modal</Button>
        <Modal {...bindings}>
          <Modal.Title>Modal</Modal.Title>
          <Modal.Subtitle>This is a modal</Modal.Subtitle>
          <Modal.Content>
            <Text h2>Doc.</Text>
            <p>Some content contained within the modal.</p>
          </Modal.Content>
        </Modal>
      </>
    );
  }
};

export const CustomContent = {
  tags: ['!sidebar'],
  render: function Render() {
    const { visible, setVisible, bindings } = useModal();
    return (
      <>
        <Button auto onClick={() => setVisible(true)}>Custom Content</Button>
        <Modal width="35rem" {...bindings}>
          <Modal.Title>My Favorites</Modal.Title>
          <Modal.Content>
            <p>This is a modal with custom width.</p>
          </Modal.Content>
        </Modal>
      </>
    );
  }
};
