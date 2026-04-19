import React from "react";
import { Tag, Spacer } from "@/components/ui";

export const Basic = {
  tags: ["!sidebar"],
  render: () => <Tag>Status: Unstable</Tag>,
};

export const Types = {
  tags: ["!sidebar"],
  render: () => (
    <>
      <Tag type="success">Success</Tag>
      <Spacer h={0.5} />
      <Tag type="warning">Warning</Tag>
      <Spacer h={0.5} />
      <Tag type="error">Error</Tag>
      <Spacer h={0.5} />
      <Tag type="secondary">Secondary</Tag>
      <Spacer h={0.5} />
      <Tag type="lite">Lite</Tag>
    </>
  ),
};

export const Invert = {
  tags: ["!sidebar"],
  render: () => (
    <>
      <Tag type="default" invert>
        Default
      </Tag>
      <Spacer h={0.5} />
      <Tag type="success" invert>
        Success
      </Tag>
      <Spacer h={0.5} />
      <Tag type="warning" invert>
        Warning
      </Tag>
      <Spacer h={0.5} />
      <Tag type="error" invert>
        Error
      </Tag>
      <Spacer h={0.5} />
      <Tag type="secondary" invert>
        Secondary
      </Tag>
    </>
  ),
};
