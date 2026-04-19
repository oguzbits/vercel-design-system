import React from 'react';
import { Table, Code, Text, Button as GeistButton, ButtonProps } from '@geist-ui/core';

// Local wrapper to resolve React 19 type incompatibilities in Geist UI v2
const Button = (props: any) => <GeistButton {...props} />;

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
        <Table.Column prop="property" label="property" render={(v: any) => <span>{v}</span>} />
        <Table.Column prop="description" label="description" render={(v: any) => <span>{v}</span>} />
        <Table.Column prop="type" label="type" render={(v: any) => <span>{v}</span>} />
        <Table.Column prop="default" label="default" render={(v: any) => <span>{v}</span>} />
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
        <Table.Column prop="property" label="property" render={(v: any) => <span>{v}</span>} />
        <Table.Column prop="description" label="description" render={(v: any) => <span>{v}</span>} />
        <Table.Column prop="type" label="type" render={(v: any) => <span>{v}</span>} />
        <Table.Column prop="default" label="default" render={(v: any) => <span>{v}</span>} />
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
        <Table.Column prop="property" label="property" width={50} render={(v: any) => <span>{v}</span>} />
        <Table.Column prop="description" label="description" render={(v: any) => <span>{v}</span>} />
        <Table.Column prop="type" label="type" render={(v: any) => <span>{v}</span>} />
        <Table.Column prop="default" label="default" render={(v: any) => <span>{v}</span>} />
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
        <Table.Column prop="property" label="property" render={(v: any) => <span>{v}</span>} />
        <Table.Column prop="description" label="description" render={(v: any) => <span>{v}</span>} />
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
        <Table.Column prop="property" label="property" render={(v: any) => <span>{v}</span>} />
        <Table.Column prop="description" label="description" render={(v: any) => <span>{v}</span>} />
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
        <Table.Column prop="property" label="property" render={(v: any) => <span>{v}</span>} />
        <Table.Column prop="description" label="description" render={(v: any) => <span>{v}</span>} />
        <Table.Column prop="type" render={(v: any) => <span>{v}</span>}>
          <Code>type</Code>
        </Table.Column>
        <Table.Column prop="default" render={(v: any) => <span>{v}</span>}>
          <Text b m={0}>default</Text>
        </Table.Column>
      </Table>
    );
  }
};
