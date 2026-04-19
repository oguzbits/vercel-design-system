import React from "react";
import { Pagination as GeistPagination } from "@geist-ui/core";
import GeistPaginationPrevious from "@geist-ui/core/esm/pagination/pagination-previous";
import GeistPaginationNext from "@geist-ui/core/esm/pagination/pagination-next";

const PaginationComponent: React.FC<any> = (props) => {
  return <GeistPagination {...(props as any)} />;
};

export type PaginationComponentType = React.FC<any> & {
  Previous: any;
  Next: any;
};

const Pagination = PaginationComponent as PaginationComponentType;
Pagination.Previous = GeistPaginationPrevious as any;
Pagination.Next = GeistPaginationNext as any;
Pagination.displayName = "Pagination";

export { Pagination };
