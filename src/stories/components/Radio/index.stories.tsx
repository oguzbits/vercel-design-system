import { Meta } from "@storybook/react";
import { Radio } from "@/components/ui";

import RadioDocumentation from "./Radio.mdx";

export { Basic, Group, Type, Description, Disabled, Row } from "./RadioBasic";

const meta: Meta<typeof Radio> = {
  title: "Data Entry/Radio",
  component: Radio,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: RadioDocumentation,
    },
  },
  args: {},
};

export default meta;
