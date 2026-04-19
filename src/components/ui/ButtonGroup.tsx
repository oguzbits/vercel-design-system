import React from "react";
import {
  ButtonGroup as GeistButtonGroup,
  ButtonGroupProps,
} from "@geist-ui/core";
const ButtonGroupComponent: React.FC<any> = (props) => {
  return <GeistButtonGroup {...(props as any)} />;
};
ButtonGroupComponent.displayName = "ButtonGroup";
export { ButtonGroupComponent as ButtonGroup };
