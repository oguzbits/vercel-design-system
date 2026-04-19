import type { StorybookConfig } from '@storybook/nextjs-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/stories/**/*.mdx",
    "../src/stories/*.stories.tsx",
    "../src/stories/components/*/index.stories.tsx",
    "../src/stories/**/index.stories.tsx",
    "../src/stories/theme/*.stories.tsx"
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
        ],
      },
    };
  },
  "staticDirs": [
    "../public"
  ]
};
export default config;