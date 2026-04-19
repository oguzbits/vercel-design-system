import React from "react";
import { Breadcrumbs } from "@/components/ui";

export const Basic = {
  tags: ["!sidebar"],
  render: () => (
    <Breadcrumbs>
      <Breadcrumbs.Item>Home</Breadcrumbs.Item>
      <Breadcrumbs.Item href="#">Catalog</Breadcrumbs.Item>
      <Breadcrumbs.Item>Components</Breadcrumbs.Item>
    </Breadcrumbs>
  ),
};

export const Separator = {
  tags: ["!sidebar"],
  render: () => (
    <Breadcrumbs separator=">">
      <Breadcrumbs.Item>Home</Breadcrumbs.Item>
      <Breadcrumbs.Item href="#">Catalog</Breadcrumbs.Item>
      <Breadcrumbs.Item>Components</Breadcrumbs.Item>
    </Breadcrumbs>
  ),
};
