import React from 'react';
import { useTheme, Text, Badge } from '@geist-ui/core';

// ... SpacingGallery code from above ...

export const ColorTable: React.FC = () => {
  const theme = useTheme();
  
  const groups = [
    {
      title: 'Brand Colors',
      tokens: [
        { name: 'colorBrandForeground1', value: theme.palette.success, description: 'Primary action color' },
        { name: 'colorBrandForeground2', value: theme.palette.cyan, description: 'Secondary action color' },
      ]
    },
    {
      title: 'Status Colors',
      tokens: [
        { name: 'colorStatusSuccess', value: theme.palette.success, description: 'Success outcomes' },
        { name: 'colorStatusError', value: theme.palette.error, description: 'Error states' },
        { name: 'colorStatusWarning', value: theme.palette.warning, description: 'Warning indicators' },
      ]
    },
    {
      title: 'Neutral Colors',
      tokens: [
        { name: 'colorNeutralBackground1', value: theme.palette.background, description: 'Default background' },
        { name: 'colorNeutralForeground1', value: theme.palette.foreground, description: 'Default text' },
        { name: 'colorNeutralStroke1', value: theme.palette.border, description: 'Default border' },
      ]
    }
  ];

  return (
    <div style={{ 
      background: '#fff', 
      borderRadius: '16px', 
      border: '1px solid #edebe9',
      overflow: 'hidden',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead style={{ background: '#faf9f8', borderBottom: '1px solid #edebe9' }}>
          <tr>
            <th style={{ textAlign: 'left', padding: '12px 20px', fontSize: '12px', color: '#605e5c' }}>Token</th>
            <th style={{ textAlign: 'left', padding: '12px 20px', fontSize: '12px', color: '#605e5c' }}>Preview</th>
            <th style={{ textAlign: 'left', padding: '12px 20px', fontSize: '12px', color: '#605e5c' }}>Value</th>
            <th style={{ textAlign: 'left', padding: '12px 20px', fontSize: '12px', color: '#605e5c' }}>Usage</th>
          </tr>
        </thead>
        <tbody>
          {groups.map(group => (
            <React.Fragment key={group.title}>
              <tr style={{ background: '#f3f2f1' }}>
                <td colSpan={4} style={{ padding: '8px 20px', fontSize: '12px', fontWeight: 600, color: '#323130' }}>
                  {group.title}
                </td>
              </tr>
              {group.tokens.map(token => (
                <tr key={token.name} style={{ borderBottom: '1px solid #f3f2f1' }}>
                  <td style={{ padding: '12px 20px', fontSize: '14px', color: '#0078d4', fontWeight: 600 }}>
                    {token.name}
                  </td>
                  <td style={{ padding: '12px 20px' }}>
                    <div style={{ 
                      width: '40px', 
                      height: '24px', 
                      background: token.value, 
                      borderRadius: '4px',
                      border: '1px solid #edebe9'
                    }} />
                  </td>
                  <td style={{ padding: '12px 20px', fontSize: '13px', fontFamily: 'monospace' }}>
                    {token.value}
                  </td>
                  <td style={{ padding: '12px 20px', fontSize: '13px', color: '#666' }}>
                    {token.description}
                  </td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const SpacingGallery: React.FC = () => {
  // ... (Paste SpacingGallery code from previous edit) ...
  const theme = useTheme();
  const verticalTokens = [
    { label: 'spacingVerticalNone', value: '0', size: 0 },
    { label: 'spacingVerticalXXS', value: '2px', size: 2 },
    { label: 'spacingVerticalXS', value: '4px', size: 4 },
    { label: 'spacingVerticalSNudge', value: '6px', size: 6 },
    { label: 'spacingVerticalS', value: '8px', size: 8 },
    { label: 'spacingVerticalMNudge', value: '10px', size: 10 },
    { label: 'spacingVerticalM', value: '12px', size: 12 },
    { label: 'spacingVerticalL', value: '16px', size: 16 },
    { label: 'spacingVerticalXL', value: '20px', size: 20 },
    { label: 'spacingVerticalXXL', value: '24px', size: 24 },
    { label: 'spacingVerticalXXXL', value: '32px', size: 32 },
  ];
  const horizontalTokens = [
    { label: 'spacingHorizontalNone', value: '0', size: 0 },
    { label: 'spacingHorizontalXXS', value: '2px', size: 2 },
    { label: 'spacingHorizontalXS', value: '4px', size: 4 },
    { label: 'spacingHorizontalSNudge', value: '6px', size: 6 },
    { label: 'spacingHorizontalS', value: '8px', size: 8 },
    { label: 'spacingHorizontalMNudge', value: '10px', size: 10 },
    { label: 'spacingHorizontalM', value: '12px', size: 12 },
    { label: 'spacingHorizontalL', value: '16px', size: 16 },
    { label: 'spacingHorizontalXL', value: '20px', size: 20 },
    { label: 'spacingHorizontalXXL', value: '24px', size: 24 },
    { label: 'spacingHorizontalXXXL', value: '32px', size: 32 },
  ];
  const Row = ({ label, value, size, color }: any) => (
    <div style={{ display: 'flex', alignItems: 'center', height: '32px', fontSize: '14px', color: '#323130' }}>
      <div style={{ width: '180px', color: '#605e5c' }}>{label}</div>
      <div style={{ width: '60px' }}>{value}</div>
      <div style={{ flex: 1, height: '100%', display: 'flex', alignItems: 'center' }}><div style={{ height: `${Math.max(1, size)}px`, width: size === 0 ? '0' : '300px', background: color }} /></div>
    </div>
  );
  const HorizontalRow = ({ label, value, size, color }: any) => (
    <div style={{ display: 'flex', alignItems: 'center', height: '32px', fontSize: '14px', color: '#323130' }}>
      <div style={{ width: '180px', color: '#605e5c' }}>{label}</div>
      <div style={{ width: '60px' }}>{value}</div>
      <div style={{ flex: 1, height: '100%', display: 'flex', alignItems: 'center' }}><div style={{ height: '100%', width: `${size}px`, background: color }} /></div>
    </div>
  );
  return (
    <div style={{ padding: '40px', background: '#fff', borderRadius: '16px', border: '1px solid #edebe9', maxWidth: '800px' }}>
      <h2 style={{ fontSize: '20px', fontWeight: 600, margin: '0 0 20px 0' }}>Vertical</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '40px' }}>{verticalTokens.map(t => (<Row key={t.label} {...t} color="#d1105a" />))}</div>
      <h2 style={{ fontSize: '20px', fontWeight: 600, margin: '0 0 20px 0' }}>Horizontal</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>{horizontalTokens.map(t => (<HorizontalRow key={t.label} {...t} color="#00ad56" />))}</div>
    </div>
  );
};
