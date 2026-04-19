import { Meta } from "@storybook/react";
import { Avatar } from "@/components/ui";

import AvatarDocumentation from "./Avatar.mdx";

export { Basic, Text, Group } from "./AvatarBasic";

const meta: Meta<typeof Avatar> = {
  title: "Data Display/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: AvatarDocumentation,
    },
  },
  args: {},
};

export default meta;
