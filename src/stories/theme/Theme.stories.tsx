import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ColorTable, SpacingGallery } from '../components/ThemeGallery';

const meta: Meta = {
  title: 'Theme',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Colors: StoryObj = {
  render: () => <ColorTable />,
};

export const Spacing: StoryObj = {
  render: () => <SpacingGallery />,
};

export const BorderRadii: StoryObj = {
  render: () => <div>Border Radii Gallery (To be implemented)</div>,
};
