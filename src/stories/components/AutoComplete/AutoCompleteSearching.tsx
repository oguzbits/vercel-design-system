import React, { useState, useEffect } from 'react';
import { AutoComplete, Text, Spacer } from '@geist-ui/core';

export const Searching = () => {
  const [searching, setSearching] = useState(false);
  const [options, setOptions] = useState<any[]>([]);

  const searchHandler = (currentValue: string) => {
    if (!currentValue) return setOptions([]);
    setSearching(true);
    // Mock async fetch
    setTimeout(() => {
      setOptions([
        { label: `Result for ${currentValue} 1`, value: '1' },
        { label: `Result for ${currentValue} 2`, value: '2' },
      ]);
      setSearching(false);
    }, 1000);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <Text small b>Async Search</Text>
      <AutoComplete 
        searching={searching}
        placeholder="Search for something..." 
        options={options} 
        onSearch={searchHandler}
      />
      <Spacer />
      <Text small type="secondary">Type something to trigger the 1s mock delay.</Text>
    </div>
  );
};
Searching.displayName = 'Searching State';
