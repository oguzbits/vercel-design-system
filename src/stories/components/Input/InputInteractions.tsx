import React, { useState } from 'react';
import { Input, Text, Note, Spacer } from '@geist-ui/core';

export const Interactions = () => {
  const [value, setValue] = useState('');
  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const isError = value.length > 0 && value.length < 5;

  return (
    <div style={{ maxWidth: '400px' }}>
      <Text h4>Controlled Validation</Text>
      <Input 
        value={value} 
        onChange={handler} 
        placeholder="Type at least 5 chars"
        type={isError ? 'error' : value.length >= 5 ? 'success' : 'default'}
        width="100%"
      />
      <Spacer h={0.5} />
      {isError && (
        <Note type="error" small label="Error" style={{ marginTop: '10px' }}>
          Too short! Needs 5+ characters.
        </Note>
      )}
      {value.length >= 5 && (
        <Note type="success" small label="Success" style={{ marginTop: '10px' }}>
          Great! That meets the criteria.
        </Note>
      )}
      
      <Spacer h={2} />
      <Text font="14px" color="#666">Current Value: <b>{value || '(empty)'}</b></Text>
    </div>
  );
};
Interactions.storyName = 'Interactive Validation';
