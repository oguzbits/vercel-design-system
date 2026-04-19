import React from "react";
import { Rating as GeistRating, RatingProps } from "@geist-ui/core";
const RatingComponent: React.FC<any> = (props) => {
  const { label, children, ...rest } = props;
  // Handle Geist components that might need children or specific props
  return <GeistRating {...(rest as any)}>{label || children}</GeistRating>;
};

const FinalRating = RatingComponent as any;

FinalRating.displayName = "Rating";

export { FinalRating as Rating };
