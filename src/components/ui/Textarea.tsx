import React from "react";
import { Textarea as GeistTextarea, TextareaProps } from "@geist-ui/core";
const TextareaComponent: React.FC<any> = (props) => {
  const { label, children, ...rest } = props;
  // Handle Geist components that might need children or specific props
  return <GeistTextarea {...(rest as any)}>{label || children}</GeistTextarea>;
};

const FinalTextarea = TextareaComponent as any;

FinalTextarea.displayName = "Textarea";

export { FinalTextarea as Textarea };
