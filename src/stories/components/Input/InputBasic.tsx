import React, { useState, useRef } from "react";
import { Input, Spacer, Button, Text, Dot } from "@/components/ui";
import { Github } from "@geist-ui/icons";

export const Basic = {
  tags: ["!sidebar"],
  render: () => <Input placeholder="Geist UI" />,
};

export const Sizes = {
  tags: ["!sidebar"],
  render: () => (
    <>
      <Input scale={1 / 3} placeholder="Scale 1/3" /> <Spacer h={0.5} />
      <Input scale={2 / 3} placeholder="Scale 2/3" /> <Spacer h={0.5} />
      <Input placeholder="Scale 1" /> <Spacer h={0.5} />
      <Input scale={4 / 3} placeholder="Scale 4/3" />
    </>
  ),
};

export const Width = {
  tags: ["!sidebar"],
  render: () => <Input placeholder="Geist UI" width="100%" />,
};

export const Unwritable = {
  tags: ["!sidebar"],
  render: () => (
    <>
      <Input disabled placeholder="Disabled" />
      <Spacer h={0.5} />
      <Input readOnly initialValue="readOnly" />
    </>
  ),
};

export const InlineLabel = {
  tags: ["!sidebar"],
  render: () => (
    <>
      <Input label="username" placeholder="Geist UI" />
      <Spacer h={0.5} />
      <Input labelRight=".com" placeholder="https://github" />
    </>
  ),
};

export const BlockLabel = {
  tags: ["!sidebar"],
  render: () => (
    <>
      <Input placeholder="Geist UI">Username</Input>
      <Spacer />
      <Input placeholder="Post title" width="50%">
        <Text h3 m={0}>
          Title
        </Text>
      </Input>
      <Spacer />
      <Input placeholder="GitHub Actions" width="50%">
        <Dot type="warning">
          <Text small>
            Problem area for <code>deployment</code>
          </Text>
        </Dot>
      </Input>
    </>
  ),
};

export const Type = {
  tags: ["!sidebar"],
  render: () => (
    <>
      <Input type="secondary" initialValue="Geist UI" />
      <Spacer h={0.5} />
      <Input type="success" initialValue="Geist UI" />
      <Spacer h={0.5} />
      <Input type="warning" initialValue="Geist UI" />
      <Spacer h={0.5} />
      <Input type="error" initialValue="Geist UI" />
    </>
  ),
};

export const Icon = {
  tags: ["!sidebar"],
  render: () => (
    <>
      <Input icon={<Github />} placeholder="GitHub" />
      <Spacer h={0.5} />
      <Input iconRight={<Github />} placeholder="GitHub" />
    </>
  ),
};

export const Clearable = {
  tags: ["!sidebar"],
  render: () => (
    <Input clearable initialValue="Geist UI" placeholder="Geist UI" />
  ),
};

export const Password = {
  tags: ["!sidebar"],
  render: () => <Input.Password initialValue="123456abc" />,
};

export const GetChange = {
  tags: ["!sidebar"],
  render: () => {
    const [value, setValue] = useState("");
    const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      console.log(e.target.value);
    };
    return <Input value={value} onChange={handler} placeholder="Geist UI" />;
  },
};

export const ImperativeAPI = {
  tags: ["!sidebar"],
  render: () => {
    const ref = useRef<HTMLInputElement>(null);
    const setChange = () => {
      if (ref.current) {
        ref.current.value = Math.random().toString(32);
      }
    };
    return (
      <>
        <Input
          initialValue="Hello"
          onChange={(e: any) => console.log(e.target.value)}
          ref={ref}
        />
        <Spacer h={0.5} />
        <Button auto type="secondary" scale={1 / 3} onClick={setChange}>
          set value
        </Button>
      </>
    );
  },
};
