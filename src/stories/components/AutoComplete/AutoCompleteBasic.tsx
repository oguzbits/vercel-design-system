import React, { useState, useRef, useEffect } from 'react';
import { AutoComplete, Spacer, Badge, Grid, Text } from '@geist-ui/core';

export const Basic = {
  tags: ['!sidebar'],
  render: () => {
    const options = [
      { label: 'London', value: 'london' },
      { label: 'Sydney', value: 'sydney' },
      { label: 'Shanghai', value: 'shanghai' },
    ];
    return <AutoComplete placeholder="Enter here" options={options} />;
  }
};

export const Type = {
  tags: ['!sidebar'],
  render: () => {
    const options = [
      { label: 'London', value: 'london' },
      { label: 'Sydney', value: 'sydney' },
      { label: 'Shanghai', value: 'shanghai' },
    ];
    return (
      <>
        <AutoComplete type="success" placeholder="Enter here" options={options} />
        <Spacer h={0.5} />
        <AutoComplete type="warning" placeholder="Enter here" options={options} />
        <Spacer h={0.5} />
        <AutoComplete type="error" placeholder="Enter here" options={options} />
      </>
    );
  }
};

export const Disabled = {
  tags: ['!sidebar'],
  render: () => {
    const options = [
      { label: 'London', value: 'london' },
      { label: 'Sydney', value: 'sydney' },
      { label: 'Shanghai', value: 'shanghai' },
    ];
    return <AutoComplete disabled options={options} initialValue="London" />;
  }
};

export const DisableFreeSolo = {
  tags: ['!sidebar'],
  render: () => {
    const options = [
      { label: 'London', value: 'london' },
      { label: 'Sydney', value: 'sydney' },
      { label: 'Shanghai', value: 'shanghai' },
    ];
    return <AutoComplete disableFreeSolo options={options} initialValue="sydney" />;
  }
};

export const Search = {
  tags: ['!sidebar'],
  render: () => {
    const allOptions = [
      { label: 'London', value: 'london' },
      { label: 'Sydney', value: 'sydney' },
      { label: 'Shanghai', value: 'shanghai' },
    ];
    const [options, setOptions] = useState<{ label: string; value: string }[] | undefined>();
    const searchHandler = (currentValue: string) => {
      if (!currentValue) return setOptions([]);
      const relatedOptions = allOptions.filter(item => item.value.includes(currentValue));
      setOptions(relatedOptions);
    };
    return <AutoComplete options={options} placeholder="Enter here" onSearch={searchHandler} />;
  }
};

export const Searching = {
  tags: ['!sidebar'],
  render: () => {
    const allOptions = [
      { label: 'London', value: 'london' },
      { label: 'Sydney', value: 'sydney' },
      { label: 'Shanghai', value: 'shanghai' },
    ];
    const [options, setOptions] = useState<{ label: string; value: string }[] | undefined>();
    const [searching, setSearching] = useState(false);
    const timer = useRef<NodeJS.Timeout>();
    const searchHandler = (currentValue: string) => {
      if (!currentValue) return setOptions([]);
      setSearching(true);
      const relatedOptions = allOptions.filter(item => item.value.includes(currentValue));
      timer.current && clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        setOptions(relatedOptions);
        setSearching(false);
      }, 1000);
    };
    return (
      <AutoComplete searching={searching}
        options={options}
        placeholder="Enter here"
        onSearch={searchHandler} />
    );
  }
};

export const CustomSearchingText = {
  tags: ['!sidebar'],
  render: () => (
    <AutoComplete searching placeholder="Enter here" width="100%">
      <AutoComplete.Searching>
        <span style={{ color: 'red' }}>waiting...</span>
      </AutoComplete.Searching>
    </AutoComplete>
  )
};

export const CustomNoOptions = {
  tags: ['!sidebar'],
  render: () => {
    const allOptions = [
      { label: 'London', value: 'london' },
      { label: 'Sydney', value: 'sydney' },
      { label: 'Shanghai', value: 'shanghai' },
    ];
    const [options, setOptions] = useState<{ label: string; value: string }[] | undefined>();
    const searchHandler = (currentValue: string) => {
      if (!currentValue) return setOptions([]);
      const relatedOptions = allOptions.filter(item => item.value.includes(currentValue));
      setOptions(relatedOptions);
    };
    return (
      <AutoComplete placeholder="Enter here" width="100%" options={options} onSearch={searchHandler}>
        <AutoComplete.Empty>
          <span>no options...</span>
        </AutoComplete.Empty>
      </AutoComplete>
    );
  }
};

export const CustomOption = {
  tags: ['!sidebar'],
  render: () => {
    const makeOption = (label: string, value: string) => (
      <AutoComplete.Option value={value}>
        <Grid.Container style={{ padding: '10pt 0' }}>
          <Grid xs={24}><Text span b font="1.2rem">Recent search results </Text></Grid>
          <Grid.Container xs={24}>
            <Grid xs><Text span>{label}</Text></Grid>
            <Grid xs={4}><Badge type="success">Recommended</Badge></Grid>
          </Grid.Container>
        </Grid.Container>
      </AutoComplete.Option>
    );
    const allOptions = [
      { label: 'London', value: 'london' },
      { label: 'Sydney', value: 'sydney' },
      { label: 'Shanghai', value: 'shanghai' },
    ];
    const [options, setOptions] = useState<any[] | undefined>();
    const searchHandler = (currentValue: string) => {
      if (!currentValue) return setOptions([]);
      const relatedOptions = allOptions.filter(item => item.value.includes(currentValue));
      const customOptions = relatedOptions.map(({ label, value }) => makeOption(label, value));
      setOptions(customOptions);
    };
    return (
      <AutoComplete placeholder="Enter here"
        width="100%"
        options={options}
        onSearch={searchHandler} />
    );
  }
};

export const Clearable = {
  tags: ['!sidebar'],
  render: () => {
    const options = [
      { label: 'London', value: 'london' },
      { label: 'Sydney', value: 'sydney' },
      { label: 'Shanghai', value: 'shanghai' },
    ];
    return <AutoComplete placeholder="Enter here" clearable options={options} />;
  }
};

export const Creatable = {
  tags: ['!sidebar'],
  render: () => {
    const allOptions = [
      { label: 'London', value: 'london' },
      { label: 'Sydney', value: 'sydney' },
      { label: 'Shanghai', value: 'shanghai' },
    ];
    const [options, setOptions] = useState<{ label: string; value: string }[] | undefined>();
    const searchHandler = (currentValue: string) => {
      const createOptions = [{
        value: currentValue, label: 'Add "' + currentValue + '"'
      }];
      if (!currentValue) return setOptions([]);
      const relatedOptions = allOptions.filter(item => item.value.includes(currentValue));
      const optionsWithCreatable = relatedOptions.length !== 0 ? relatedOptions : createOptions;
      setOptions(optionsWithCreatable);
    };
    return <AutoComplete options={options} clearable disableFreeSolo placeholder="Enter here" onSearch={searchHandler} />;
  }
};
