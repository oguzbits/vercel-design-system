import React from "react";
import { Snippet, Spacer } from "@/components/ui";

export const Basic = {
  tags: ["!sidebar"],
  render: () => <Snippet text="yarn add @geist-ui/core" width="300px" />,
};

export const Width = {
  tags: ["!sidebar"],
  render: () => <Snippet text="yarn add @geist-ui/core" width="100%" />,
};

export const Types = {
  tags: ["!sidebar"],
  render: () => (
    <>
      <Snippet text="yarn add @geist-ui/core" type="dark" width="300px" />
      <Spacer h={0.5} />
      <Snippet text="yarn add @geist-ui/core" type="success" width="300px" />
      <Spacer h={0.5} />
      <Snippet text="yarn add @geist-ui/core" type="warning" width="300px" />
      <Spacer h={0.5} />
      <Snippet text="yarn add @geist-ui/core" type="error" width="300px" />
      <Spacer h={0.5} />
      <Snippet text="yarn add @geist-ui/core" type="secondary" width="300px" />
      <Spacer h={0.5} />
      <Snippet text="yarn add @geist-ui/core" type="lite" width="300px" />
    </>
  ),
};

export const MultiLine = {
  tags: ["!sidebar"],
  render: () => <Snippet text={["cd project", "now"]} width="300px" />,
};

export const WithoutCopy = {
  tags: ["!sidebar"],
  render: () => (
    <Snippet copy="prevent" text="yarn add @geist-ui/core" width="300px" />
  ),
};

export const CustomSymbol = {
  tags: ["!sidebar"],
  render: () => (
    <Snippet symbol=">" text="yarn add @geist-ui/core" width="300px" />
  ),
};

export const CustomToast = {
  tags: ["!sidebar"],
  render: () => (
    <Snippet
      toastText="Code copied!"
      toastType="secondary"
      text="yarn add @geist-ui/core"
      width="300px"
    />
  ),
};

export const Filled = {
  tags: ["!sidebar"],
  render: () => (
    <>
      <Snippet
        text="yarn add @geist-ui/core"
        type="success"
        filled
        width="300px"
      />
      <Spacer h={0.5} />
      <Snippet
        text="yarn add @geist-ui/core"
        type="warning"
        filled
        width="300px"
      />
      <Spacer h={0.5} />
      <Snippet
        text="yarn add @geist-ui/core"
        type="error"
        filled
        width="300px"
      />
      <Spacer h={0.5} />
      <Snippet
        text="yarn add @geist-ui/core"
        type="secondary"
        filled
        width="300px"
      />
    </>
  ),
};
