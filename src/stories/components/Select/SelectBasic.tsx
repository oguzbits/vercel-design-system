import { Spacer, Code, Modal, useModal, Button } from '@geist-ui/core';
import { Select } from '@/components/ui/Select';

export const Basic = {
  tags: ['!sidebar'],
  render: () => {
    const handler = (val: string | string[]) => console.log(val);
    return (
      <Select placeholder="Choose one" onChange={handler}>
        <Select.Option value="1">Option 1</Select.Option>
        <Select.Option value="2">Option 2</Select.Option>
      </Select>
    );
  }
};

export const Type = {
  tags: ['!sidebar'],
  render: () => (
    <>
      <Select placeholder="Default" type="default">
        <Select.Option value="1">Option 1</Select.Option>
        <Select.Option value="2">Option 2</Select.Option>
      </Select>
      <Spacer h={0.5} />
      <Select type="success" initialValue="1">
        <Select.Option value="1">Option 1</Select.Option>
        <Select.Option value="2">Option 2</Select.Option>
      </Select>
      <Spacer h={0.5} />
      <Select type="warning" initialValue="2">
        <Select.Option value="1">Option 1</Select.Option>
        <Select.Option value="2">Option 2</Select.Option>
      </Select>
      <Spacer h={0.5} />
      <Select type="error" initialValue="1">
        <Select.Option value="1">Option 1</Select.Option>
        <Select.Option value="2">Option 2</Select.Option>
      </Select>
    </>
  )
};

export const Disabled = {
  tags: ['!sidebar'],
  render: () => (
    <Select placeholder="Choose one" disabled>
      <Select.Option value="1">Option 1</Select.Option>
      <Select.Option value="2">Option 2</Select.Option>
    </Select>
  )
};

export const DisabledOption = {
  tags: ['!sidebar'],
  render: () => (
    <Select placeholder="Choose one">
      <Select.Option value="1" disabled>Option 1</Select.Option>
      <Select.Option value="2">Option 2</Select.Option>
    </Select>
  )
};

export const Pure = {
  tags: ['!sidebar'],
  render: () => (
    <Select placeholder="Choose one" pure>
      <Select.Option value="1">Option 1</Select.Option>
      <Select.Option value="2">Option 2</Select.Option>
    </Select>
  )
};

export const Labels = {
  tags: ['!sidebar'],
  render: () => (
    <Select placeholder="Frameworks">
      <Select.Option label>JavaScript</Select.Option>
      <Select.Option value="react">React</Select.Option>
      <Select.Option value="angular">Angular</Select.Option>
      <Select.Option label>Ruby</Select.Option>
      <Select.Option value="rails">Rails</Select.Option>
      <Select.Option value="sinatra">Sinatra</Select.Option>
    </Select>
  )
};

export const Divider = {
  tags: ['!sidebar'],
  render: () => (
    <Select placeholder="Frameworks">
      <Select.Option value="react">React</Select.Option>
      <Select.Option value="angular">Angular</Select.Option>
      <Select.Option divider />
      <Select.Option value="rails">Rails</Select.Option>
      <Select.Option value="sinatra">Sinatra</Select.Option>
    </Select>
  )
};

export const Multiple = {
  tags: ['!sidebar'],
  render: () => (
    <Select placeholder="Frameworks" multiple width="200px" initialValue={['1', '3', '4', '6']}>
      <Select.Option value="1">React</Select.Option>
      <Select.Option value="2">Angular</Select.Option>
      <Select.Option value="3">Vue</Select.Option>
      <Select.Option divider />
      <Select.Option value="4">Rails</Select.Option>
      <Select.Option value="5">Sinatra</Select.Option>
      <Select.Option divider />
      <Select.Option value="6">Express</Select.Option>
      <Select.Option value="7">Koa</Select.Option>
    </Select>
  )
};

export const MultipleWithoutClear = {
  tags: ['!sidebar'],
  render: () => (
    <Select placeholder="Frameworks" multiple width="200px" clearable={false} initialValue={['1', '3', '4', '6']}>
      <Select.Option value="1">React</Select.Option>
      <Select.Option value="2">Angular</Select.Option>
      <Select.Option value="3">Vue</Select.Option>
      <Select.Option divider />
      <Select.Option value="4">Rails</Select.Option>
      <Select.Option value="5">Sinatra</Select.Option>
      <Select.Option divider />
      <Select.Option value="6">Express</Select.Option>
      <Select.Option value="7">Koa</Select.Option>
    </Select>
  )
};

export const Compose = {
  tags: ['!sidebar'],
  render: () => (
    <Select placeholder="Choose one" initialValue="1">
      <Select.Option value="1"><Code>TypeScript</Code></Select.Option>
      <Select.Option value="2"><Code>JavaScript</Code></Select.Option>
    </Select>
  )
};

export const OverWidthIndices = {
  tags: ['!sidebar'],
  render: () => (
    <>
      <Select placeholder="Choose one" initialValue="1" width="150px">
        <Select.Option value="1">Truncate an overly long string</Select.Option>
        <Select.Option value="2">Option 2</Select.Option>
      </Select>
      <Spacer h={0.5} />
      <Select placeholder="Choose one" initialValue="1" width="150px" disableMatchWidth>
        <Select.Option value="1">Autoscale option width when text is too long</Select.Option>
        <Select.Option value="2">Option 2</Select.Option>
      </Select>
    </>
  )
};

export const SetParentElement = {
  tags: ['!sidebar'],
  render: () => {
    const { visible, setVisible, bindings } = useModal();
    return (
      <>
        <Button auto onClick={() => setVisible(true)}>Show Select</Button>
        <Modal {...bindings}>
          <Modal.Title>Modal</Modal.Title>
          <Modal.Content id="customModalSelect">
            <Select placeholder="Choose one" initialValue="1"
              getPopupContainer={() => document.getElementById('customModalSelect')!}>
              <Select.Option value="1"><Code>TypeScript</Code></Select.Option>
              <Select.Option value="2"><Code>JavaScript</Code></Select.Option>
            </Select>
            <p>Scroll through the content to see the changes.</p>
            <div style={{ height: '300px' }}></div>
            <p>Scroll through the content to see the changes.</p>
          </Modal.Content>
          <Modal.Action passive onClick={() => setVisible(false)}>Cancel</Modal.Action>
        </Modal>
      </>
    );
  }
};
