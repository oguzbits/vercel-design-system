import React from "react";
import { Breadcrumbs as GeistBreadcrumbs } from "@geist-ui/core";
import GeistBreadcrumbsItem from "@geist-ui/core/esm/breadcrumbs/breadcrumbs-item";
import GeistBreadcrumbsSeparator from "@geist-ui/core/esm/breadcrumbs/breadcrumbs-separator";

const BreadcrumbsComponent: React.FC<any> = (props) => {
  return <GeistBreadcrumbs {...(props as any)} />;
};

export type BreadcrumbsComponentType = React.FC<any> & {
  Item: any;
  Separator: any;
};

const Breadcrumbs = BreadcrumbsComponent as BreadcrumbsComponentType;
Breadcrumbs.Item = GeistBreadcrumbsItem;
Breadcrumbs.Separator = GeistBreadcrumbsSeparator;
Breadcrumbs.displayName = "Breadcrumbs";

export { Breadcrumbs };
