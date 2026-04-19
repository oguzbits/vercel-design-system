import { Meta } from '@storybook/react';
import { Pagination } from '@geist-ui/core';

export { Default } from './PaginationDefault';
export { Limit } from './PaginationLimit';
export { Size } from './PaginationSize';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Best Practices

#### Usage
- **Do** use pagination when representing large datasets that would otherwise cause slow page loads or overwhelming scroll length.
- **Do** provide clear "Previous" and "Next" controls.
- **Do** use the \`limit\` prop to prevent the pagination bar from becoming too wide on smaller screens.
- **Don't** use pagination if the data set is small (e.g., less than 20 items); consider infinite scroll or a "Load More" button instead.

#### Interaction
- **Do** ensure that changing a page scrolls the user back to the top of the content area.
- **Do** highlight the current page distinctively.
- **Don't** reset the page to 1 when the user changes a filter if the current page could potentially contain results for the new filter.

### Accessibility
- Pagination controls **must** be wrapped in a \`<nav>\` element with a label like "Pagination" to be identified as a navigation landmark.
- Each page link should be an interactive element (button or link) with a clear focus state.
- Screen readers should announce the current page index (e.g., "Page 3 of 10").
- The "Previous" and "Next" buttons should indicate their purpose clearly through labels or \`aria-label\`.
        `,
      },
    },
  },
} as Meta;
