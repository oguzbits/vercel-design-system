import React from 'react';
import { Progress, Spacer, useTheme, Button } from '@/components/ui';

export const Basic = {
  tags: ['!sidebar'],
  render: () => <Progress value={50} />
};

export const CustomMax = {
  tags: ['!sidebar'],
  render: () => <Progress value={45} max={50} />
};

export const DynamicColors = {
  tags: ['!sidebar'],
  render: function Render() {
    const theme = useTheme();
    const [value, setValue] = React.useState(20);
    const colors = {
      20: theme.palette.error,
      40: theme.palette.warning,
      60: theme.palette.success,
      80: '#000',
    };
    return (
      <div style={{ maxWidth: '400px' }}>
        <Progress value={value} colors={colors} />
        <Spacer h={1} />
        <Button onClick={() => setValue(prev => prev + 20)} auto scale={0.5}>Increase</Button>
        <Spacer w={0.5} inline />
        <Button onClick={() => setValue(20)} auto scale={0.5} type="abort">Reset</Button>
      </div>
    );
  }
};

export const Type = {
  tags: ['!sidebar'],
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Progress type="secondary" value={10} />
      <Progress type="success" value={45} />
      <Progress type="warning" value={100} />
      <Progress type="error" value={21} />
    </div>
  )
};
