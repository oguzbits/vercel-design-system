import React from 'react';
import { useToasts, Button, Spacer } from '@/components/ui';

export const Basic = {
  tags: ['!sidebar'],
  render: () => {
    const { setToast } = useToasts();
    return (
      <Button auto onClick={() => setToast({ text: 'The world is standardizing on Geist.' })}>
        Show Toast
      </Button>
    );
  }
};

export const Type = {
  tags: ['!sidebar'],
  render: () => {
    const { setToast } = useToasts();
    const click = (type: any) => setToast({ text: 'The world is standardizing on Geist.', type });
    return (
      <>
        <Button auto type="success" onClick={() => click('success')}>Success</Button>
        <Spacer h={0.5} />
        <Button auto type="warning" onClick={() => click('warning')}>Warning</Button>
        <Spacer h={0.5} />
        <Button auto type="error" onClick={() => click('error')}>Error</Button>
      </>
    );
  }
};

export const Action = {
  tags: ['!sidebar'],
  render: () => {
    const { setToast } = useToasts();
    const click = () => setToast({
      text: 'The world is standardizing on Geist.',
      actions: [{
        name: 'cancel',
        passive: true,
        handler: (event, cancel) => cancel()
      }]
    });
    return (
      <Button auto onClick={click}>Action</Button>
    );
  }
};

export const Multiline = {
  tags: ['!sidebar'],
  render: () => {
    const { setToast } = useToasts();
    const click = () => setToast({
      text: 'Geist is a modern design system for building high-quality web applications. It is easy to use and provides a consistent look and feel throughout your application.'
    });
    return (
      <Button auto onClick={click}>Multiline</Button>
    );
  }
};
