import React from "react";
import { Tree as GeistTree } from "@geist-ui/core";
import GeistTreeFile from "@geist-ui/core/esm/tree/tree-file";
import GeistTreeFolder from "@geist-ui/core/esm/tree/tree-folder";

const TreeComponent: React.FC<any> = (props) => {
  return <GeistTree {...(props as any)} />;
};

export type TreeComponentType = React.FC<any> & {
  File: any;
  Folder: any;
};

const Tree = TreeComponent as TreeComponentType;
Tree.File = GeistTreeFile as any;
Tree.Folder = GeistTreeFolder as any;
Tree.displayName = "Tree";

export { Tree };
