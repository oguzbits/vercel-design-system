import React from 'react';
import { Table, Code, Text, Button } from '@geist-ui/core';

export const Basic = {
  tags: ['!sidebar'],
  render: function Render() {
    const data = [
      { property: 'type', description: 'Content type', type: 'secondary | warning', default: '-' },
      { property: 'Component', description: 'DOM element to use', type: 'string', default: '-' },
      { property: 'bold', description: 'Bold style', type: 'boolean', default: 'true' },
    ];
    return (
      <Table data={data}>
        <Table.Column prop="property" label="property" />
        <Table.Column prop="description" label="description" />
        <Table.Column prop="type" label="type" />
        <Table.Column prop="default" label="default" />
      </Table>
    );
  }
};

export const Compose = {
  tags: ['!sidebar'],
  render: function Render() {
    const data = [
      { property: 'type', description: 'Content type', type: 'secondary | warning', default: '-' },
      { property: 'Component', description: 'DOM element to use', type: <Code>string</Code>, default: '-' },
      { property: <Text b m={0}>bold</Text>, description: 'Bold style', type: <Code>boolean</Code>, default: <Code>true</Code> },
    ];
    return (
      <Table data={data}>
        <Table.Column prop="property" label="property" />
        <Table.Column prop="description" label="description" />
        <Table.Column prop="type" label="type" />
        <Table.Column prop="default" label="default" />
      </Table>
    );
  }
};

export const Width = {
  tags: ['!sidebar'],
  render: function Render() {
    const data = [
      { property: 'type', description: 'Content type', type: 'secondary | warning', default: '-' },
      { property: 'Component', description: 'DOM element to use', type: <Code>string</Code>, default: '-' },
      { property: <Text b m={0}>bold</Text>, description: 'Bold style', type: <Code>boolean</Code>, default: <Code>true</Code> },
    ];
    return (
      <Table data={data}>
        <Table.Column prop="property" label="property" width={50} />
        <Table.Column prop="description" label="description" />
        <Table.Column prop="type" label="type" />
        <Table.Column prop="default" label="default" />
      </Table>
    );
  }
};

export const Actions = {
  tags: ['!sidebar'],
  render: function Render() {
    const dataSource = [
      { property: 'type', description: 'Content type', operation: '' },
      { property: 'Component', description: 'DOM element to use', operation: '' },
      { property: <Text b m={0}>bold</Text>, description: 'Bold style', operation: '' },
    ];
    const [data, setData] = React.useState(dataSource);
    const renderAction = (value: any, rowData: any, index: number) => {
      const removeHandler = () => {
        setData(last => last.filter((_, dataIndex) => dataIndex !== index));
      };
      return (
        <Button type="error" auto scale={1/3} font="12px" onClick={removeHandler}>Remove</Button>
      );
    };
    return (
      <Table data={data} onChange={value => setData(value)}>
        <Table.Column prop="property" label="property" />
        <Table.Column prop="description" label="description" />
        <Table.Column prop="operation" label="operation" width={150} render={renderAction} />
      </Table>
    );
  }
};

export const UpdateRow = {
  tags: ['!sidebar'],
  render: function Render() {
    const dataSource = [
      { property: 'type', description: 'Content type', operation: '' },
      { property: 'Component', description: 'DOM element to use', operation: '' },
      { property: <Text b m={0}>bold</Text>, description: 'Bold style', operation: '' },
    ];
    const [data, setData] = React.useState(dataSource);
    const renderAction = (value: any, rowData: any, rowIndex: number) => {
      const updateHandler = () => {
        setData(last => {
          return last.map((item, dataIndex) => {
            if (dataIndex !== rowIndex) return item;
            return {
              ...item,
              property: Math.random().toString(16).slice(-5)
            };
          });
        });
      };
      return (
        <Button type="secondary" auto scale={1/3} font="12px" onClick={updateHandler}>Update</Button>
      );
    };
    return (
      <Table data={data} onChange={value => setData(value)}>
        <Table.Column prop="property" label="property" />
        <Table.Column prop="description" label="description" />
        <Table.Column prop="operation" label="operation" width={150} render={renderAction} />
      </Table>
    );
  }
};

export const CustomHead = {
  tags: ['!sidebar'],
  render: function Render() {
    const data = [
      { property: 'type', description: 'Content type', type: 'secondary | warning', default: '-' },
      { property: 'Component', description: 'DOM element to use', type: <Code>string</Code>, default: '-' },
      { property: <Text b m={0}>bold</Text>, description: 'Bold style', type: <Code>boolean</Code>, default: <Code>true</Code> },
    ];
    return (
      <Table data={data}>
        <Table.Column prop="property" label="property" />
        <Table.Column prop="description" label="description" />
        <Table.Column prop="type">
          <Code>type</Code>
        </Table.Column>
        <Table.Column prop="default">
          <Text b m={0}>default</Text>
        </Table.Column>
      </Table>
    );
  }
};
