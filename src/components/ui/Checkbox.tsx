import React from "react";
import { Checkbox as GeistCheckbox } from "@geist-ui/core";
import GeistCheckboxGroup from "@geist-ui/core/esm/checkbox/checkbox-group";

const CheckboxComponent: React.FC<any> = (props) => {
  return <GeistCheckbox {...(props as any)} />;
};

export type CheckboxComponentType = React.FC<any> & {
  Group: any;
};

const Checkbox = CheckboxComponent as CheckboxComponentType;
Checkbox.Group = GeistCheckboxGroup;
Checkbox.displayName = "Checkbox";

export { Checkbox };
