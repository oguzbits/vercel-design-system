import { Meta } from '@storybook/react';
import { ButtonGroup } from '@geist-ui/core';

import ButtonGroupDocumentation from './ButtonGroup.mdx';

export { 
  Basic,
  Variant,
  Sizes,
  Vertical,
  Disabled
} from './ButtonGroupBasic';

const meta: Meta<typeof ButtonGroup> = {
  title: 'Data Entry/Button Group',
  component: ButtonGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: ButtonGroupDocumentation,
    },
  },
  args: {},
};

export default meta;
