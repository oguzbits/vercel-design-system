import { Meta } from "@storybook/react";
import { Divider } from "@/components/ui";
import DividerDocumentation from "./Divider.mdx";

export { Basic, Alignment, Types } from "./DividerBasic";

const meta: Meta<typeof Divider> = {
  title: "Others/Divider",
  component: Divider,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: DividerDocumentation,
    },
    sidebar: {
      showChildren: false,
    },
  },
};

export default meta;
