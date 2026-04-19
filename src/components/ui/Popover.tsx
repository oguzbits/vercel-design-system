import React from "react";
import { Popover as GeistPopover } from "@geist-ui/core";
import GeistPopoverItem from "@geist-ui/core/esm/popover/popover-item";

const PopoverComponent: React.FC<any> = (props) => {
  return <GeistPopover {...(props as any)} />;
};

export type PopoverComponentType = React.FC<any> & {
  Item: any;
  Option: any;
};

const Popover = PopoverComponent as PopoverComponentType;
Popover.Item = GeistPopoverItem as any;
Popover.Option = GeistPopoverItem as any;
Popover.displayName = "Popover";

export { Popover };
