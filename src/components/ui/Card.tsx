import React from "react";
import { Card as GeistCard, CardProps } from "@geist-ui/core";
import GeistCardContent from "@geist-ui/core/esm/card/card-content";
import GeistCardFooter from "@geist-ui/core/esm/card/card-footer";
const CardComponent: React.FC<any> = (props) => {
  return <GeistCard {...(props as any)} />;
};
const Card = CardComponent as any;
Card.Content = GeistCardContent;
Card.Body = GeistCardContent;
Card.Footer = GeistCardFooter;
Card.Actions = GeistCardFooter;
Card.displayName = "Card";
export { Card, GeistCardContent as CardContent, GeistCardFooter as CardFooter };
