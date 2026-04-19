import React from 'react';
import { Tabs, Spacer } from '@geist-ui/core';

export const Basic = () => (
  <Tabs initialValue="1">
    <Tabs.Item label="HTTP" value="1">HTTP is a protocol for fetching resources.</Tabs.Item>
    <Tabs.Item label="HTTPS" value="2">HTTPS is the secure version of HTTP.</Tabs.Item>
  </Tabs>
);

export const Highlight = () => (
  <Tabs initialValue="1" hideDivider hideBorder>
    <Tabs.Item label="HTTP" value="1">HTTP is a protocol for fetching resources.</Tabs.Item>
    <Tabs.Item label="HTTPS" value="2">HTTPS is the secure version of HTTP.</Tabs.Item>
  </Tabs>
);
