import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Modal, useModal, useToasts } from '../../../components/ui/Feedback';
import { Button } from '../../../components/ui/Button';
import { Text } from '../../../components/ui/Text';

const ModalExample = () => {
  const { visible, setVisible, bindings } = useModal();
  return (
    <>
      <Button auto type="success" onClick={() => setVisible(true)}>Open Modal</Button>
      <Modal {...bindings}>
        <Modal.Title>Critical Update</Modal.Title>
        <Modal.Subtitle>Please review the following changes</Modal.Subtitle>
        <Modal.Content>
          <Text p>The production environment will be undergoing maintenance tomorrow at 02:00 UTC.</Text>
          <Text p>Expected downtime is 15 minutes. All sessions will be preserved.</Text>
        </Modal.Content>
        <Modal.Action passive onClick={() => setVisible(false)}>Understood</Modal.Action>
        <Modal.Action>Remind me later</Modal.Action>
      </Modal>
    </>
  );
};

const ToastExample = () => {
  const { setToast } = useToasts();
  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Button auto onClick={() => setToast({ text: 'The record has been updated.' })}>
        Default Toast
      </Button>
      <Button auto type="success" onClick={() => setToast({ text: 'Project deployed successfully!', type: 'success' })}>
        Success Toast
      </Button>
      <Button auto type="error" onClick={() => setToast({ text: 'Failed to connect to the database.', type: 'error' })}>
        Error Toast
      </Button>
    </div>
  );
};

const meta: Meta = {
  title: 'Components/Feedback',
};

export default meta;

export const ModalStory: StoryObj = {
  render: () => <ModalExample />,
  name: 'Modal',
};

export const ToastStory: StoryObj = {
  render: () => <ToastExample />,
  name: 'Toasts',
};
