import React from "react";
import { Code, Spacer } from "@/components/ui";
import type { StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Code>;

export const Basic: Story = {
  tags: ["!sidebar"],
  render: () => <Code>npm install @geist-ui/core</Code>,
};

export const CodeBlock: Story = {
  tags: ["!sidebar"],
  render: () => (
    <Code block>{`const name = "Geist UI";\nconsole.log(name);`}</Code>
  ),
};

export const Width: Story = {
  tags: ["!sidebar"],
  render: () => (
    <div style={{ width: "400px" }}>
      <Code block width="100%">
        {`const App = () => (\n  <div>Full Width Code Block</div>\n)`}
      </Code>
    </div>
  ),
};

export const Name: Story = {
  tags: ["!sidebar"],
  render: () => (
    <Code block name="install.sh">
      npm install @geist-ui/core
    </Code>
  ),
};

export const ClassicStyle: Story = {
  tags: ["!sidebar"],
  render: () => (
    <>
      <Code classic>npm install @geist-ui/core</Code>
      <Spacer h={1} />
      <Code block classic name="main.js">
        {`import { GeistProvider } from '@/components/ui';`}
      </Code>
    </>
  ),
};
