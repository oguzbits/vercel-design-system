import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
  stories: [
    "../src/stories/Introduction.mdx",
    "../src/stories/components/@(AutoComplete|Avatar|Badge|Breadcrumbs|Button|Capacity|Card|Checkbox)/index.stories.tsx",
    "../src/stories/components/@(Code|Collapse|Description|Display|Divider|Dot|Fieldset|Grid)/index.stories.tsx",
    "../src/stories/components/@(Icons|Image|Input|Keyboard|Link|Loading|Modal|Note)/index.stories.tsx",
    "../src/stories/components/@(Page|Pagination|Progress|Radio|Select|Slider|Snippet|Spacer)/index.stories.tsx",
    "../src/stories/components/@(Spinner|Table|Tabs|Tag|Text|Textarea|Toast|Toggle|Tooltip|Tree|User)/index.stories.tsx",
  ],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@chromatic-com/storybook",
  ],
  framework: {
    name: "@storybook/nextjs-vite",
    options: {},
  },
  async viteFinal(config) {
    return {
      ...config,
      optimizeDeps: {
        ...config.optimizeDeps,
        include: [
          ...(config.optimizeDeps?.include || []),
          "react-dom",
          "react",
          "@geist-ui/core",
        ],
      },
    };
  },
  staticDirs: ["../public"],
};
export default config;
