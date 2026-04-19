# Vercel Design System

A high-performance, aesthetically polished design system for modern web applications. Built on top of Geist UI, this system is engineered for the bleeding edge of the React ecosystem, providing native support for React 19 and Next.js 16.

## ✨ Key Features

- **React 19 Native:** Fully compatible with React 19's `ref` prop changes and the removal of `defaultProps`.
- **Modern Stack:** Powered by Next.js 16, Vite 8, and Storybook 10.
- **Performance Optimized:** Leverages the **React Compiler** for automatic memoization and optimal rendering.
- **Professional Aesthetics:** Inherits the iconic Vercel look-and-feel with Geist Sans & Mono typography.
- **Robust Engineering:** Implements the **Wrapper Pattern** to resolve legacy library conflicts without mutating `node_modules`.

## 🚀 Tech Stack

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **Core UI:** [@geist-ui/core](https://geist-ui.dev/)
- **Bundler:** [Vite 8](https://vitejs.dev/)
- **Documentation:** [Storybook 10](https://storybook.js.org/)
- **Runtime:** [Bun](https://bun.sh/)
- **Styling:** CSS Modules & [styled-jsx](https://github.com/vercel/styled-jsx)

## 📦 Getting Started

### Prerequisites

Ensure you have [Bun](https://bun.sh/) installed on your machine.

### Installation

```bash
bun install
```

### Development

Run the development server for the main application:

```bash
bun dev
```

### Storybook

Launch the design system documentation and component playground:

```bash
bun storybook
```

## 🛠 Architecture: The Wrapper Pattern

This project uses a professional **Wrapper Pattern** located in `src/components/ui/` to ensure modern React 19 compatibility for `@geist-ui/core`. These wrappers handle:

- **Ref Filtering:** Preventing external `ref` props from overwriting internal library measurements (e.g., in `Slider` and `Select`).
- **Default Prop Injection:** Providing explicit fallbacks for components where `defaultProps` are no longer supported.
- **Scroll Fixes:** Scoped CSS injections to fix "scroll-to-top" bugs caused by legacy hidden focus inputs.

**Always import components from the local UI layer:**

```tsx
// ✅ Recommended
import { Button, Slider, Select } from "@/components/ui";

// ❌ Avoid direct library imports
import { Slider } from "@geist-ui/core";
```

## 🧪 Testing

Run the test suite powered by Vitest:

```bash
bun test
```

## 📄 License

This project is licensed under the MIT License.
