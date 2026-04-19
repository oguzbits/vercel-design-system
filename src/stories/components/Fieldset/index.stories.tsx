import { Meta } from '@storybook/react';
import { Fieldset } from '@geist-ui/core';

import FieldsetDocumentation from './Fieldset.mdx';

export { 
  Basic,
  CustomText,
  Tabs,
  WithDivider
} from './FieldsetBasic';

const meta: Meta<typeof Fieldset> = {
  title: 'Surfaces/Fieldset',
  component: Fieldset,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: FieldsetDocumentation,
    },
  },
  args: {},
};

export default meta;
