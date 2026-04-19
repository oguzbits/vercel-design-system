import { Meta } from '@storybook/react';
import { AutoComplete } from '@geist-ui/core';

import AutoCompleteDocumentation from './AutoComplete.mdx';

export { 
  Basic,
  Type,
  Disabled,
  DisableFreeSolo,
  Search,
  Searching,
  CustomSearchingText,
  CustomNoOptions,
  CustomOption,
  Clearable,
  Creatable
} from './AutoCompleteBasic';

const meta: Meta<typeof AutoComplete> = {
  title: 'Data Entry/AutoComplete',
  component: AutoComplete,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: AutoCompleteDocumentation,
    },
  },
  args: {},
};

export default meta;
