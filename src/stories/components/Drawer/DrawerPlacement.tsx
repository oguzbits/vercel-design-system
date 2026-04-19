import React, { useState } from 'react';
import { Drawer, Button, Text, Grid } from '@geist-ui/core';

export const Placement = () => {
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState('right');
  
  const open = (p) => {
    setPlacement(p);
    setVisible(true);
  };

  return (
    <div style={{ padding: '40px' }}>
      <Grid.Container gap={2}>
        <Grid><Button auto onClick={() => open('top')}>Top</Button></Grid>
        <Grid><Button auto onClick={() => open('bottom')}>Bottom</Button></Grid>
        <Grid><Button auto onClick={() => open('left')}>Left</Button></Grid>
        <Grid><Button auto onClick={() => open('right')}>Right</Button></Grid>
      </Grid.Container>
      
      <Drawer visible={visible} placement={placement} onClose={() => setVisible(false)}>
        <Drawer.Title>{placement.toUpperCase()} Drawer</Drawer.Title>
        <Drawer.Content>
          <Text p>Flexible placement allows for diverse UX patterns across different screen sizes and use cases.</Text>
        </Drawer.Content>
      </Drawer>
    </div>
  );
};
Placement.storyName = 'Placements';
