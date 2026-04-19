import React from "react";
import {
  Description as GeistDescription,
  DescriptionProps,
} from "@geist-ui/core";
const DescriptionComponent: React.FC<any> = (props) => {
  const { label, children, ...rest } = props;
  // Handle Geist components that might need children or specific props
  return (
    <GeistDescription {...(rest as any)}>{label || children}</GeistDescription>
  );
};

const FinalDescription = DescriptionComponent as any;

FinalDescription.displayName = "Description";

export { FinalDescription as Description };
