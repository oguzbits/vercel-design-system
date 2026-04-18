import React from 'react';
import { Button } from '@geist-ui/core';
import { Github, Plus, Search, ExternalLink } from '@geist-ui/icons';

export const Icon = () => (
  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
    <Button icon={<Search />}>Search</Button>
    <Button iconRight={<ExternalLink />}>Deploy</Button>
    <Button icon={<Github />} auto />
    <Button icon={<Plus />} auto px={0.6} type="secondary" />
  </div>
);

Icon.parameters = {
  docs: {
    description: {
      story: 'Icons can be placed on either side of the button text using `icon` or `iconRight` props. ' +
             'For icon-only buttons, use the `auto` prop to maintain consistent padding.',
    },
  },
};
