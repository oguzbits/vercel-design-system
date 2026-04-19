import React from 'react';
import { Pagination as GeistPagination, PaginationProps } from '@geist-ui/core';

/**
 * Wrapper for Geist UI Pagination to ensure compatibility with React 19.
 * 
 * Provides explicit default values that React 19 no longer supports via 'defaultProps'.
 */
export const Pagination: React.FC<PaginationProps> = (props) => {
  const { 
    initialPage = 1, 
    count = 1, 
    limit = 7, 
    ...rest 
  } = props;

  return (
    <GeistPagination 
      initialPage={initialPage} 
      count={count} 
      limit={limit} 
      {...rest} 
    />
  );
};

Pagination.displayName = 'Pagination';
