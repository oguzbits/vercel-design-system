import React from "react";
import { Link, Text } from "@/components/ui";

export const Basic = {
  tags: ["!sidebar"],
  render: () => <Link href="#">Hyperlink</Link>,
};

export const Highlight = {
  tags: ["!sidebar"],
  render: () => (
    <Link href="#" color>
      Hyperlink With Color
    </Link>
  ),
};

export const Underline = {
  tags: ["!sidebar"],
  render: () => (
    <Link href="#" underline>
      Underline Hyperlink
    </Link>
  ),
};

export const Icon = {
  tags: ["!sidebar"],
  render: () => (
    <>
      <Link href="#" icon>
        Hyperlink With Icon
      </Link>
      <br />
      <Link href="#" icon color>
        Hyperlink With Icon And Color
      </Link>
    </>
  ),
};

export const Block = {
  tags: ["!sidebar"],
  render: () => (
    <Link href="#" block>
      Block Hyperlink
    </Link>
  ),
};
