import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

const theme = create({
  base: "light",
  colorPrimary: "#000",
  colorSecondary: "#0070f3",

  // UI
  appBg: "#ffffff",
  appContentBg: "#ffffff",
  appBorderColor: "#eaeaea",
  appBorderRadius: 0,

  // Typography
  fontBase:
    '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  fontCode: "menubar, Monaco, Lucida Console, monospace",

  // Text colors
  textColor: "#111111",
  textInverseColor: "#ffffff",

  // Toolbar
  barTextColor: "#666666",
  barSelectedColor: "#0070f3",
  barBg: "#ffffff",

  brandTitle: "Geist Design System",
  brandUrl: "https://vercel.com",
  brandImage:
    "https://assets.vercel.com/image/upload/front/favicon/vercel/76x76.png",
});

addons.setConfig({
  theme,
  sidebar: {
    showRoots: true,
    collapsedRoots: ["internal"],
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: true },
    copy: { hidden: true },
    fullscreen: { hidden: true },
  },
});
