'use client';

import React from 'react';
import { GeistProvider, CssBaseline } from '@geist-ui/core';

export default function GeistProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GeistProvider>
      <CssBaseline />
      {children}
    </GeistProvider>
  );
}
