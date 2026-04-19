import React from "react";
import { Tooltip as GeistTooltip, TooltipProps } from "@geist-ui/core";
const TooltipComponent: React.FC<any> = (props) => {
  const { label, children, ...rest } = props;
  // Handle Geist components that might need children or specific props
  return <GeistTooltip {...(rest as any)}>{label || children}</GeistTooltip>;
};

const FinalTooltip = TooltipComponent as any;

FinalTooltip.displayName = "Tooltip";

export { FinalTooltip as Tooltip };
