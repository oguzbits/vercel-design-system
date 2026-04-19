import React from 'react';
import { Grid, Card, Text } from '@geist-ui/core';

export const Default = () => {
  const MockItem = ({ text }) => (
    <Card shadow width="100%" style={{ height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Text b>{text}</Text>
    </Card>
  );

  return (
    <div style={{ padding: '20px', width: '100%' }}>
      <Grid.Container gap={2} justify="center">
        <Grid xs={24} md={12} lg={8}><MockItem text="1" /></Grid>
        <Grid xs={24} md={12} lg={8}><MockItem text="2" /></Grid>
        <Grid xs={24} md={12} lg={8}><MockItem text="3" /></Grid>
        <Grid xs={24} md={12} lg={8}><MockItem text="4" /></Grid>
        <Grid xs={24} md={12} lg={8}><MockItem text="5" /></Grid>
        <Grid xs={24} md={12} lg={8}><MockItem text="6" /></Grid>
      </Grid.Container>
    </div>
  );
};
Default.storyName = 'Default Grid';
