import React from 'react';
import { Loading, Spacer, Card, Text } from '@geist-ui/core';

export const Default = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <Text b>Standard Loading</Text>
      <Loading />
      <Spacer />
      <Text b>Loading with Text</Text>
      <Loading>Fetching results</Loading>
      <Spacer />
      <Card width="200px" height="100px" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Loading>Processing</Loading>
      </Card>
    </div>
  );
};
Default.storyName = 'Default Loading';
