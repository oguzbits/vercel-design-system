import React from "react";
import { Page as GeistPage } from "@geist-ui/core";
import PageHeader from "@geist-ui/core/esm/page/page-header";
import PageContent from "@geist-ui/core/esm/page/page-content";
import PageFooter from "@geist-ui/core/esm/page/page-footer";

const PageComponent: React.FC<any> = (props) => {
  return <GeistPage {...(props as any)} />;
};

export type PageComponentType = React.FC<any> & {
  Header: any;
  Content: any;
  Body: any;
  Footer: any;
};

const Page = PageComponent as PageComponentType;
Page.Header = PageHeader as any;
Page.Content = PageContent as any;
Page.Body = PageContent as any;
Page.Footer = PageFooter as any;
Page.displayName = "Page";

export { Page };
