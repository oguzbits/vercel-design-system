import { create } from '@storybook/theming';

export default create({
  base: 'light',
  brandTitle: 'Geist Design System',
  brandUrl: 'https://geist-ui.dev',
  brandImage: 'https://raw.githubusercontent.com/geist-org/geist-ui/master/public/favicon.ico',
  brandTarget: '_self',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: '#eaeaea',
  appBorderRadius: 0,

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
