import React from 'react';
import { Slider, Text, Spacer } from '@geist-ui/core';

export const Step = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', maxWidth: '400px', padding: '20px' }}>
      <div>
        <Text small b>Step: 10 with Markers</Text>
        <Slider step={10} showMarkers initialValue={40} />
      </div>
      <div>
        <Text small b>Custom Range (0 - 10)</Text>
        <Slider min={0} max={10} initialValue={5} />
      </div>
    </div>
  );
};
Step.storyName = 'Steps & Ranges';
