import React from 'react';
import { Grid, Card, Text, Code } from '@geist-ui/core';

export const Responsive = () => {
  return (
    <div style={{ padding: '20px', width: '100%' }}>
      <Text h4>Breakpoint Behavior</Text>
      <Text p>Resize your browser to see the columns adapt.</Text>
      <Grid.Container gap={2}>
        <Grid xs={24} sm={12} md={8} lg={6} xl={4}>
           <Card shadow width="100%">
             <Code>xs=24 sm=12 ...</Code>
           </Card>
        </Grid>
        <Grid xs={24} sm={12} md={8} lg={6} xl={4}>
           <Card shadow width="100%">
             <Code>xs=24 sm=12 ...</Code>
           </Card>
        </Grid>
        <Grid hideIn="xs" sm={12} md={8} lg={6} xl={4}>
           <Card shadow width="100%">
             <Text b>Hidden on XS</Text>
           </Card>
        </Grid>
      </Grid.Container>
    </div>
  );
};
Responsive.storyName = 'Responsive Breakpoints';
