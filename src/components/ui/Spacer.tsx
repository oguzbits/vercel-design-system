import React from "react";
import { Spacer as GeistSpacer, SpacerProps } from "@geist-ui/core";
const SpacerComponent: React.FC<any> = (props) => {
  const { label, children, ...rest } = props;
  // Handle Geist components that might need children or specific props
  return <GeistSpacer {...(rest as any)}>{label || children}</GeistSpacer>;
};

const FinalSpacer = SpacerComponent as any;

FinalSpacer.displayName = "Spacer";

export { FinalSpacer as Spacer };
