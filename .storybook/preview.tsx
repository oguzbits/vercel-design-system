import "../src/stories/utils/geist-fixer";
import type { Preview } from "@storybook/react";
import { GeistProvider, CssBaseline } from "@geist-ui/core";

const preview: Preview = {
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: "light", icon: "circlehollow", title: "Light" },
          { value: "dark", icon: "circle", title: "Dark" },
        ],
      },
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
    backgrounds: { disable: true },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || "light";
      return (
        <GeistProvider themeType={theme}>
          <CssBaseline />
          <div
            style={{
              padding: "24px",
              background: theme === "dark" ? "#000" : "#fff",
              transition: "background 0.2s ease",
            }}
          >
            <Story />
          </div>
        </GeistProvider>
      );
    },
  ],
};

export default preview;
