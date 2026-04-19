import React from "react";
import { Progress as GeistProgress, ProgressProps } from "@geist-ui/core";
const ProgressComponent: React.FC<any> = (props) => {
  const { label, children, ...rest } = props;
  // Handle Geist components that might need children or specific props
  return <GeistProgress {...(rest as any)}>{label || children}</GeistProgress>;
};

const FinalProgress = ProgressComponent as any;

FinalProgress.displayName = "Progress";

export { FinalProgress as Progress };
