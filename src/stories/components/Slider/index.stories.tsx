import { Meta } from '@storybook/react';
import { Slider } from '@/components/ui/Slider';

import SliderDocumentation from './Slider.mdx';

export { 
  Basic,
  Type,
  Disabled,
  Step,
  Range,
  Event
} from './SliderBasic';

const meta: Meta<typeof Slider> = {
  title: 'Data Entry/Slider',
  component: Slider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: SliderDocumentation,
    },
  },
  args: {},
};

export default meta;
