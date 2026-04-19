import { Meta } from "@storybook/react";
import { Progress } from "@/components/ui";

import ProgressDocumentation from "./Progress.mdx";

export { Basic, CustomMax, DynamicColors, Type } from "./ProgressBasic";

const meta: Meta<typeof Progress> = {
  title: "Feedback/Progress",
  component: Progress,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: ProgressDocumentation,
    },
  },
  args: {},
};

export default meta;
