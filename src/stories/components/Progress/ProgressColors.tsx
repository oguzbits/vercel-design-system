import React from 'react';
import { Progress, Text, Spacer } from '@geist-ui/core';

export const Colors = () => {
  const colors = {
    20: '#f5a623',
    40: '#f5a623',
    60: '#0070f3',
    80: '#0070f3',
    100: '#79ffe1',
  };
  
  return (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <Text h4>Dynamic Thresholds</Text>
      <Progress value={20} colors={colors} />
      <Spacer />
      <Progress value={50} colors={colors} />
      <Spacer />
      <Progress value={85} colors={colors} />
      <Spacer />
      <Progress value={100} colors={colors} />
    </div>
  );
};
Colors.storyName = 'Dynamic Colors';
