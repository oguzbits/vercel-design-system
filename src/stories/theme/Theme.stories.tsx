import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { 
  ColorTable, 
  SpacingGallery, 
  BorderRadiiGallery, 
  ShadowsGallery, 
  TypographyGallery, 
  LayoutGallery 
} from '../components/ThemeGallery';

const meta: Meta = {
  title: 'Theme/Guidelines',
  parameters: {
    layout: 'padded',
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
  name: 'Border Radii',
  render: () => <BorderRadiiGallery />,
};

export const Shadows: StoryObj = {
  render: () => <ShadowsGallery />,
};

export const Typography: StoryObj = {
  render: () => <TypographyGallery />,
};

export const Layout: StoryObj = {
  render: () => <LayoutGallery />,
};
