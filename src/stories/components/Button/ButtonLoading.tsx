import React from 'react';
import { Button } from '@geist-ui/core';

export const Loading = () => (
  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
    <Button loading>Loading</Button>
    <Button loading type="success">Saving</Button>
    <Button loading type="secondary" loadingType="cube">Processing</Button>
  </div>
);

Loading.parameters = {
  docs: {
    description: {
      story: 'Loading states should be used during asynchronous operations. ' +
             'Geist provides different `loadingType` variants like `spinner` (default) or `cube`.',
    },
  },
};
