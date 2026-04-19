import React from "react";
import { Snippet as GeistSnippet, SnippetProps } from "@geist-ui/core";
const SnippetComponent: React.FC<any> = (props) => {
  const { label, children, ...rest } = props;
  // Handle Geist components that might need children or specific props
  return <GeistSnippet {...(rest as any)}>{label || children}</GeistSnippet>;
};

const FinalSnippet = SnippetComponent as any;

FinalSnippet.displayName = "Snippet";

export { FinalSnippet as Snippet };
