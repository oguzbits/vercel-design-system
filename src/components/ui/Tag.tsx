import React from "react";
import { Tag as GeistTag, TagProps } from "@geist-ui/core";
const TagComponent: React.FC<any> = (props) => {
  const { label, children, ...rest } = props;
  // Handle Geist components that might need children or specific props
  return <GeistTag {...(rest as any)}>{label || children}</GeistTag>;
};

const FinalTag = TagComponent as any;

FinalTag.displayName = "Tag";

export { FinalTag as Tag };
