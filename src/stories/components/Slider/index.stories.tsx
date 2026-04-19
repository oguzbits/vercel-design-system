import { Meta } from '@storybook/react';
import { Slider } from '@geist-ui/core';

export { Default } from './SliderDefault';
export { Step } from './SliderStep';
export { Type } from './SliderType';

export default {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Best Practices

#### Usage
- **Do** use a slider when users need to select a value within a known range (e.g., volume, brightness, price range).
- **Do** use sliders for "fuzzy" adjustments where the exact value is less important than the relative position.
- **Do** provide immediate visual feedback as the user move the slider.
- **Don't** use a slider for precise numerical input if the range is large; consider an \`Input\` with \`type="number"\` instead.

#### Design
- **Do** use \`showMarkers\` for discrete ranges (e.g., ratings 1-5) to provide clear stop points.
- **Do** ensure the slider track has enough horizontal space to allow for fine adjustments.
- **Don't** hide the current value unless it's truly intuitive or redundant.

### Accessibility
- Sliders should be keyboard-accessible using the arrow keys (\`Left/Right\` or \`Up/Down\`) for fine adjustments and \`Home/End\` keys for range extremes.
- Every slider **must** have an associated label or \`aria-label\` to describe the parameter being adjusted.
- The \`aria-valuemin\`, \`aria-valuemax\`, and \`aria-valuenow\` attributes are handled automatically by Geist UI.
- Ensure that the slider thumb (handle) has a clear focus state and sufficient contrast against the track.
        `,
      },
    },
  },
} as Meta;
