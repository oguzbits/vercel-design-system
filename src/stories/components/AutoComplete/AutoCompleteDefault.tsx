import React, { useState } from 'react';
import { AutoComplete } from '@geist-ui/core';

export const Default = () => {
  const options = [
    { label: 'Next.js', value: 'nextjs' },
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
    { label: 'Angular', value: 'angular' },
    { label: 'Svelte', value: 'svelte' },
  ];

  const [value, setValue] = useState('');
  
  const searchHandler = (currentValue: string) => {
    if (!currentValue) return;
    // Logic for filtering is usually handled by the user or by providing the options prop
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <AutoComplete 
        placeholder="Enter a framework..." 
        options={options} 
        value={value}
        onChange={setValue}
        onSearch={searchHandler}
      />
    </div>
  );
};
Default.displayName = 'Default';
