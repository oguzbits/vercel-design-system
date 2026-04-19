import React, { useState, useMemo } from 'react';
import { AutoComplete, Grid } from '@geist-ui/core';

export const Basic = () => {
    const options = [
      { label: 'London', value: 'london' },
      { label: 'Sydney', value: 'sydney' },
      { label: 'Shanghai', value: 'shanghai' },
    ];
    return (
      <Grid.Container gap={2}>
        <Grid>
          <AutoComplete placeholder="Enter city" options={options} width="100%" />
        </Grid>
      </Grid.Container>
    );
};

export const Searching = () => {
    const allOptions = [
      { label: 'London', value: 'london' },
      { label: 'Sydney', value: 'sydney' },
      { label: 'Shanghai', value: 'shanghai' },
    ];
    const [options, setOptions] = useState<typeof allOptions>([]);
    const searchHandler = (currentValue: string) => {
      if (!currentValue) return setOptions([]);
      const result = allOptions.filter(item => item.value.includes(currentValue.toLowerCase()));
      setOptions(result);
    };
    return (
      <Grid.Container gap={2}>
        <Grid>
          <AutoComplete 
            placeholder="Search city" 
            options={options} 
            onSearch={searchHandler}
            width="100%" 
          />
        </Grid>
      </Grid.Container>
    );
};
