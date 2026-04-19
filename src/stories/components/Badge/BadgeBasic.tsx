import React from 'react';
import { Badge, Avatar, Button, Link, Spacer } from '@geist-ui/core';

export const Basic = {
  tags: ['!sidebar'],
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
      <Badge>1</Badge>
      <Badge>50</Badge>
      <Badge>100</Badge>
      <Badge>2020</Badge>
    </div>
  )
};

export const Type = {
  tags: ['!sidebar'],
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
      <Badge type="success">Success</Badge>
      <Badge type="warning">Warning</Badge>
      <Badge type="error">Error</Badge>
      <Badge type="secondary">Secondary</Badge>
    </div>
  )
};

export const CustomColor = {
  tags: ['!sidebar'],
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
      <Badge style={{ backgroundColor: '#f56a00' }}>Custom Color</Badge>
      <Badge style={{ backgroundColor: '#722ed1' }}>Custom Color</Badge>
    </div>
  )
};

/**
 * Robust CustomBadgeAnchor specifically for Storybook/React 19
 */
const CustomBadgeAnchor: React.FC<{ 
  children: React.ReactNode, 
  badge: React.ReactNode,
  placement?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' 
}> = ({ children, badge, placement = 'topRight' }) => {
  const getPositionStyles = () => {
    switch(placement) {
      case 'topLeft': return { top: 0, left: 0, transform: 'translate(-50%, -50%)' };
      case 'bottomLeft': return { bottom: 0, left: 0, transform: 'translate(-50%, 50%)' };
      case 'bottomRight': return { bottom: 0, right: 0, transform: 'translate(50%, 50%)' };
      default: return { top: 0, right: 0, transform: 'translate(50%, -50%)' };
    }
  };

  return (
    <div style={{ position: 'relative', display: 'inline-flex', verticalAlign: 'middle' }}>
      {children}
      <div style={{ position: 'absolute', zIndex: 10, pointerEvents: 'none', ...getPositionStyles() }}>
        {badge}
      </div>
    </div>
  );
};

export const Anchor = {
  tags: ['!sidebar'],
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', padding: '20px 0' }}>
      <CustomBadgeAnchor badge={<Badge scale={0.5}>10</Badge>}>
        <Avatar src="/avatar.png" />
      </CustomBadgeAnchor>
      
      <Spacer inline w={2.5} />
      
      <CustomBadgeAnchor placement="bottomRight" badge={<Badge scale={0.5} type="success">10</Badge>}>
        <Avatar scale={1.5} isSquare src="/avatar.png" />
      </CustomBadgeAnchor>

      <Spacer inline w={2.5} />

      <CustomBadgeAnchor badge={<Badge scale={0.5} type="warning">99+</Badge>}>
        <Button scale={0.5} auto>Action</Button>
      </CustomBadgeAnchor>

      <Spacer inline w={2.5} />

      <CustomBadgeAnchor badge={<Badge scale={0.5} type="error" dot />}>
        <Link target="_blank" href="https://github.com/geist-org/geist-ui">Geist UI</Link>
      </CustomBadgeAnchor>

      <Spacer inline w={2.5} />

      <CustomBadgeAnchor badge={<Badge type="error" dot style={{ padding: '5px' }} />}>
        <Link target="_blank" href="https://github.com/geist-org/geist-ui">Share Link</Link>
      </CustomBadgeAnchor>
    </div>
  ),
};
