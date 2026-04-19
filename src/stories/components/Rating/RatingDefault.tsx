import React, { useState } from 'react';
import { Rating, Text, Spacer } from '@geist-ui/core';

export const Default = () => {
  const [val, setVal] = useState(3);
  
  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <Text b>Customizable Rating</Text>
      <Rating value={val} onValueChange={setVal} />
      <Spacer />
      <Text small>Current Value: {val}</Text>
      <Spacer h={2}/>
      <Text b>Various Counts</Text>
      <Rating count={10} initialValue={7} />
      <Spacer />
      <Rating count={3} initialValue={2} />
    </div>
  );
};
Default.storyName = 'Interactive Rating';
