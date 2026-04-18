import { create } from '@storybook/theming';

export default create({
  base: 'light',
  
  // Brand
  brandTitle: 'Geist UI',
  brandUrl: 'https://vercel.com/design',
  brandImage: 'https://assets.vercel.com/image/upload/front/favicon/vercel/76x76.png',
  brandTarget: '_self',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderColor: '#eaeaea',
  appBorderRadius: 0,

  // Typography
  fontBase: '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  fontCode: 'menubar, Monaco, Lucida Console, monospace',

  // Text colors
  textColor: '#000000',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#666666',
  barSelectedColor: '#000000',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#eaeaea',
  inputTextColor: '#000000',
  inputBorderRadius: 4,
});
