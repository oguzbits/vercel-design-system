import { Meta } from "@storybook/react";
import { Card } from "@/components/ui";

import CardDocumentation from "./Card.mdx";

export {
  Basic,
  Hoverable,
  Shadow,
  Types,
  WithFooter,
  WithImage,
  WithDivider,
} from "./CardBasic";

const meta: Meta<typeof Card> = {
  title: "Surfaces/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: CardDocumentation,
    },
  },
  args: {},
};

export default meta;
