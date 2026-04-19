import React from 'react';
import { Tabs, Spacer, Text } from '@geist-ui/core';
import { Home, User, Settings } from '@geist-ui/icons';

export const Basic = {
  tags: ['!sidebar'],
  render: () => (
    <Tabs initialValue="1">
      <Tabs.Item label="HTTP" value="1">
        <Text>HTTP is a protocol for fetching resources such as HTML documents.</Text>
      </Tabs.Item>
      <Tabs.Item label="HTTPS" value="2">
        <Text>HTTPS is an extension of the Hypertext Transfer Protocol (HTTP).</Text>
      </Tabs.Item>
    </Tabs>
  )
};

export const Disabled = {
  tags: ['!sidebar'],
  render: () => (
    <Tabs initialValue="1">
      <Tabs.Item label="HTTP" value="1">
        <Text>HTTP is a protocol for fetching resources such as HTML documents.</Text>
      </Tabs.Item>
      <Tabs.Item label="HTTPS" value="2" disabled />
    </Tabs>
  )
};

export const Icon = {
  tags: ['!sidebar'],
  render: () => (
    <Tabs initialValue="1">
      <Tabs.Item label={<><Home size={14} /> Home</>} value="1">
        <Text>Home content.</Text>
      </Tabs.Item>
      <Tabs.Item label={<><User size={14} /> Profile</>} value="2">
        <Text>Profile content.</Text>
      </Tabs.Item>
    </Tabs>
  )
};

export const HideDivider = {
  tags: ['!sidebar'],
  render: () => (
    <Tabs initialValue="1" hideDivider>
      <Tabs.Item label="HTTP" value="1">
        <Text>HTTP content.</Text>
      </Tabs.Item>
      <Tabs.Item label="HTTPS" value="2">
        <Text>HTTPS content.</Text>
      </Tabs.Item>
    </Tabs>
  )
};
