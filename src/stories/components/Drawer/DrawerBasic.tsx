import React, { useState } from 'react';
import { Drawer, Button, Text } from '@geist-ui/core';

export const Basic = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Button auto onClick={() => setVisible(true)}>Show Drawer</Button>
      <Drawer visible={visible} onClose={() => setVisible(false)}>
        <Drawer.Title>Drawer</Drawer.Title>
        <Drawer.Subtitle>This is a subtitle</Drawer.Subtitle>
        <Drawer.Content>
          <Text p>Some content in the drawer.</Text>
        </Drawer.Content>
      </Drawer>
    </div>
  );
};

export const Placement = () => {
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState<'left' | 'right' | 'top' | 'bottom'>('right');
  const open = (p: typeof placement) => {
    setPlacement(p);
    setVisible(true);
  };
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Button auto onClick={() => open('top')}>Top</Button>
      <Button auto onClick={() => open('right')}>Right</Button>
      <Button auto onClick={() => open('bottom')}>Bottom</Button>
      <Button auto onClick={() => open('left')}>Left</Button>
      <Drawer visible={visible} onClose={() => setVisible(false)} placement={placement}>
        <Drawer.Title>Placement: {placement}</Drawer.Title>
        <Drawer.Content>
          <Text p>Drawer appearing from the {placement}.</Text>
        </Drawer.Content>
      </Drawer>
    </div>
  );
};
