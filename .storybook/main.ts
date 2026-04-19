import type { StorybookConfig } from '@storybook/nextjs-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/stories/Introduction.mdx",
    "../src/stories/components/@(Button|Text|Code|Icons|Grid|Spacer)/index.stories.tsx",
  ],
  "addons": [
    "@storybook/addon-docs",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@chromatic-com/storybook",
  ],
  "framework": {
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
          'react-dom',
          'react',
          '@geist-ui/core',
        ],
      },
    };
  },
  "staticDirs": [
    "../public"
  ]
};
export default config;