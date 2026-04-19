import React, { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Spacer, Button, Link, Badge, Grid } from '@geist-ui/core';

// ─────────────────────────────────────────────────────────────────────────────
// CustomTooltip — React 19-compatible replacement for Geist UI's Tooltip.
// Geist's Tooltip relies on defaultProps (removed in React 19) AND on
// CssTransition calling cloneElement inside a setTimeout — a pattern that
// breaks under React 19 Concurrent Mode. This wrapper re-implements the same
// look and behaviour using plain React hooks and createPortal.
// ─────────────────────────────────────────────────────────────────────────────

const TOOLTIP_COLORS: Record<string, { bg: string; color: string; border?: string }> = {
  default:   { bg: '#fff',     color: '#666',    border: '1px solid #eaeaea' },
  dark:      { bg: '#000',     color: '#fff' },
  success:   { bg: '#f0fff4',  color: '#0a7c42' },
  warning:   { bg: '#fffbeb',  color: '#b45309' },
  error:     { bg: '#fff5f5',  color: '#c00' },
  secondary: { bg: '#f9f9f9',  color: '#444' },
  lite:      { bg: '#f8f8f8',  color: '#666',    border: '1px solid #eaeaea' },
};

interface CustomTooltipProps {
  text: React.ReactNode;
  children: React.ReactNode;
  placement?: 'top' | 'topStart' | 'topEnd' | 'bottom' | 'bottomStart' | 'bottomEnd' |
              'left' | 'leftStart' | 'leftEnd' | 'right' | 'rightStart' | 'rightEnd';
  type?: 'default' | 'dark' | 'success' | 'warning' | 'error' | 'secondary' | 'lite';
  trigger?: 'hover' | 'click';
  hideArrow?: boolean;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  text,
  children,
  placement = 'top',
  type = 'default',
  trigger = 'hover',
  hideArrow = false,
}) => {
  const [phase, setPhase] = useState<'hidden' | 'measuring' | 'visible'>('hidden');
  const [position, setPosition] = useState({ top: 0, left: 0, transform: '' });
  const anchorRef = useRef<HTMLSpanElement>(null);
  const tipRef = useRef<HTMLDivElement>(null);
  const enterTimer = useRef<ReturnType<typeof setTimeout>>();
  const leaveTimer = useRef<ReturnType<typeof setTimeout>>();

  const colors = TOOLTIP_COLORS[type] || TOOLTIP_COLORS.default;

  const calcPosition = useCallback(() => {
    if (!anchorRef.current || !tipRef.current) return;
    const anchor = anchorRef.current.getBoundingClientRect();
    const tip    = tipRef.current.getBoundingClientRect();
    const scroll = { x: window.scrollX, y: window.scrollY };
    const GAP = 8;

    let top = 0, left = 0, transform = '';
    const anchorCX = anchor.left + anchor.width / 2 + scroll.x;
    const anchorCY = anchor.top + anchor.height / 2 + scroll.y;

    switch (placement) {
      case 'top':
        top = anchor.top + scroll.y - tip.height - GAP;
        left = anchorCX;
        transform = 'translateX(-50%)';
        break;
      case 'topStart':
        top = anchor.top + scroll.y - tip.height - GAP;
        left = anchor.left + scroll.x;
        break;
      case 'topEnd':
        top = anchor.top + scroll.y - tip.height - GAP;
        left = anchor.right + scroll.x;
        transform = 'translateX(-100%)';
        break;
      case 'bottom':
        top = anchor.bottom + scroll.y + GAP;
        left = anchorCX;
        transform = 'translateX(-50%)';
        break;
      case 'bottomStart':
        top = anchor.bottom + scroll.y + GAP;
        left = anchor.left + scroll.x;
        break;
      case 'bottomEnd':
        top = anchor.bottom + scroll.y + GAP;
        left = anchor.right + scroll.x;
        transform = 'translateX(-100%)';
        break;
      case 'left':
        top = anchorCY;
        left = anchor.left + scroll.x - tip.width - GAP;
        transform = 'translateY(-50%)';
        break;
      case 'leftStart':
        top = anchor.top + scroll.y;
        left = anchor.left + scroll.x - tip.width - GAP;
        break;
      case 'leftEnd':
        top = anchor.bottom + scroll.y;
        left = anchor.left + scroll.x - tip.width - GAP;
        transform = 'translateY(-100%)';
        break;
      case 'right':
        top = anchorCY;
        left = anchor.right + scroll.x + GAP;
        transform = 'translateY(-50%)';
        break;
      case 'rightStart':
        top = anchor.top + scroll.y;
        left = anchor.right + scroll.x + GAP;
        break;
      case 'rightEnd':
        top = anchor.bottom + scroll.y;
        left = anchor.right + scroll.x + GAP;
        transform = 'translateY(-100%)';
        break;
    }
    setPosition({ top, left, transform });
  }, [placement]);

  // Two-phase render: 'measuring' renders tooltip off-screen first; 'visible' positions it.
  useEffect(() => {
    if (phase === 'measuring') {
      // Tooltip is in DOM but invisible — measure and reposition
      requestAnimationFrame(() => {
        calcPosition();
        setPhase('visible');
      });
    }
  }, [phase, calcPosition]);

  const open = useCallback(() => {
    clearTimeout(leaveTimer.current);
    enterTimer.current = setTimeout(() => {
      setPhase('measuring');
    }, 100);
  }, []);

  const close = useCallback(() => {
    clearTimeout(enterTimer.current);
    leaveTimer.current = setTimeout(() => {
      setPhase('hidden');
    }, 150);
  }, []);

  const mouseHandlers = trigger === 'hover'
    ? { onMouseEnter: open, onMouseLeave: close }
    : { onClick: () => setPhase(p => p === 'hidden' ? 'measuring' : 'hidden') };

  const isOpen = phase !== 'hidden';

  const content = isOpen ? createPortal(
    <div
      ref={tipRef}
      style={{
        position: 'absolute',
        top: phase === 'measuring' ? -9999 : position.top,
        left: phase === 'measuring' ? -9999 : position.left,
        transform: position.transform,
        zIndex: 1000,
        background: colors.bg,
        color: colors.color,
        border: colors.border ?? 'none',
        borderRadius: '6px',
        padding: '6px 12px',
        fontSize: '14px',
        lineHeight: '1.5',
        boxShadow: type === 'default' ? '0 4px 14px rgba(0,0,0,.08)' : 'none',
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
        maxWidth: 260,
        opacity: phase === 'visible' ? 1 : 0,
        transition: 'opacity 0.12s ease',
      }}
    >
      {text}
    </div>,
    document.body,
  ) : null;

  return (
    <>
      <style>{`
        @keyframes geist-tooltip-fade {
          from { opacity:0; transform: ${position.transform} translateY(2px); }
          to   { opacity:1; transform: ${position.transform}; }
        }
      `}</style>
      <span
        ref={anchorRef}
        style={{ display: 'inline-block', cursor: 'default' }}
        {...mouseHandlers}
      >
        {children}
      </span>
      {content}
    </>
  );
};

// Alias so stories use the same JSX tag
const Tooltip = CustomTooltip;

// ─────────────────────────────────────────────────────────────────────────────
// Stories
// ─────────────────────────────────────────────────────────────────────────────

export const Basic = {
  tags: ['!sidebar'],
  render: () => <Tooltip text="The compiler tools">Tooltip</Tooltip>,
};

export const Types = {
  tags: ['!sidebar'],
  render: () => (
    <Grid.Container gap={2}>
      <Grid><Tooltip text="The compiler tools" type="success">Success</Tooltip></Grid>
      <Grid><Tooltip text="The compiler tools" type="warning">Warning</Tooltip></Grid>
      <Grid><Tooltip text="The compiler tools" type="error">Error</Tooltip></Grid>
      <Grid><Tooltip text="The compiler tools" type="secondary">Secondary</Tooltip></Grid>
      <Grid><Tooltip text="The compiler tools" type="dark">Dark</Tooltip></Grid>
      <Grid><Tooltip text="The compiler tools" type="lite">Lite</Tooltip></Grid>
    </Grid.Container>
  ),
};

export const Placement = {
  tags: ['!sidebar'],
  render: () => (
    <Grid.Container gap={2} justify="center" style={{ padding: '40px 0' }}>
      <Grid xs={4}><Tooltip text="The compiler tools" placement="topStart">topStart</Tooltip></Grid>
      <Grid xs={4}><Tooltip text="The compiler tools" placement="top">top</Tooltip></Grid>
      <Grid xs={4}><Tooltip text="The compiler tools" placement="topEnd">topEnd</Tooltip></Grid>
      <Grid xs={4}><Tooltip text="The compiler tools" placement="leftStart">leftStart</Tooltip></Grid>
      <Grid xs={4}></Grid>
      <Grid xs={4}><Tooltip text="The compiler tools" placement="rightStart">rightStart</Tooltip></Grid>
      <Grid xs={4}><Tooltip text="The compiler tools" placement="left">left</Tooltip></Grid>
      <Grid xs={4}></Grid>
      <Grid xs={4}><Tooltip text="The compiler tools" placement="right">right</Tooltip></Grid>
      <Grid xs={4}><Tooltip text="The compiler tools" placement="leftEnd">leftEnd</Tooltip></Grid>
      <Grid xs={4}></Grid>
      <Grid xs={4}><Tooltip text="The compiler tools" placement="rightEnd">rightEnd</Tooltip></Grid>
      <Grid xs={4}><Tooltip text="The compiler tools" placement="bottomStart">bottomStart</Tooltip></Grid>
      <Grid xs={4}><Tooltip text="The compiler tools" placement="bottom">bottom</Tooltip></Grid>
      <Grid xs={4}><Tooltip text="The compiler tools" placement="bottomEnd">bottomEnd</Tooltip></Grid>
    </Grid.Container>
  ),
};

export const CustomContent = {
  tags: ['!sidebar'],
  render: () => (
    <div style={{ display: 'flex', gap: '20px' }}>
      <Tooltip text={
        <>
          <p style={{ margin: 0 }}>This is a <b>custom</b> content.</p>
          <p style={{ margin: 0 }}>You can use any components here.</p>
        </>
      }>
        <Button auto scale={0.5}>Custom Content</Button>
      </Tooltip>
    </div>
  ),
};
