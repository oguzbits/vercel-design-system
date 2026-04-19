import React from 'react';
import { Capacity, Spacer, useTheme } from '@/components/ui';

export const Basic = {
  tags: ['!sidebar'],
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Capacity value={15} />
      <Capacity value={45} />
      <Capacity value={95} />
    </div>
  )
};

export const FixedColor = {
  tags: ['!sidebar'],
  render: () => {
    const theme = useTheme();
    return <Capacity value={75} color={theme.palette.success} />;
  }
};
