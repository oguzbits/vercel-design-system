import React from "react";
import { Divider as GeistDivider, DividerProps } from "@geist-ui/core";
const DividerComponent: React.FC<any> = (props) => {
  const { label, children, ...rest } = props;
  // Handle Geist components that might need children or specific props
  return <GeistDivider {...(rest as any)}>{label || children}</GeistDivider>;
};

const FinalDivider = DividerComponent as any;

FinalDivider.displayName = "Divider";

export { FinalDivider as Divider };
