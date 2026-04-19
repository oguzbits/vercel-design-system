import React from 'react';
import { Button, Grid, Spacer } from '@geist-ui/core';

export const Interactions = () => {
  return (
    <Grid.Container gap={2}>
      <Grid xs={24}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <h4 style={{ marginBottom: '8px' }}>States</h4>
            <div style={{ display: 'flex', gap: '12px' }}>
              <Button auto>Default</Button>
              <Button auto type="secondary">Primary</Button>
              <Button auto disabled>Disabled</Button>
              <Button auto loading>Loading</Button>
            </div>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '8px' }}>Hover & Active (Interactive)</h4>
            <div style={{ display: 'flex', gap: '12px' }}>
              <Button auto shadow type="secondary">Shadow Button</Button>
              <Button auto ghost>Ghost Button</Button>
            </div>
          </div>

          <div>
            <h4 style={{ marginBottom: '8px' }}>Logical Grouping</h4>
            <div style={{ display: 'flex' }}>
              <Button auto type="secondary" style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}>Publish</Button>
              <Button auto style={{ borderRadius: 0, borderLeft: 'none', borderRight: 'none' }}>Draft</Button>
              <Button auto type="error" style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}>Delete</Button>
            </div>
          </div>
        </div>
      </Grid>
    </Grid.Container>
  );
};

Interactions.parameters = {
  docs: {
    description: {
      story: 'Buttons have multiple states to provide feedback to users. These include ready, hover, active, loading, and disabled states.',
    },
  },
};
