import React, { useState } from 'react';
import { Grid, useTheme, Input, Text, useClipboard, useToasts } from '@geist-ui/core';
import { Github, Gitlab, Twitter, Activity, Airplay, AlertCircle, Search, Settings } from '@geist-ui/icons';
import * as AllIcons from '@geist-ui/icons';
import type { StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Github>;

export const Import: Story = {
  tags: ['!sidebar'],
  render: () => (
    <Grid.Container gap={1.5}>
      <Grid><Github /></Grid>
      <Grid><Gitlab /></Grid>
      <Grid><Twitter /></Grid>
      <Grid><Activity /></Grid>
      <Grid><Airplay /></Grid>
      <Grid><AlertCircle /></Grid>
      <Grid><Settings /></Grid>
      <Grid><Search /></Grid>
    </Grid.Container>
  )
};

export const Color: Story = {
  tags: ['!sidebar'],
  render: () => {
    const theme = useTheme();
    return (
      <Grid.Container gap={1.5}>
        <Grid><Github color={theme.palette.success} /></Grid>
        <Grid><Gitlab color={theme.palette.warning} /></Grid>
        <Grid><Twitter color={theme.palette.error} /></Grid>
      </Grid.Container>
    );
  }
};

export const Sizes: Story = {
  tags: ['!sidebar'],
  render: () => (
    <Grid.Container gap={1.5} alignItems="center">
      <Grid><Github size={16} /></Grid>
      <Grid><Github size={24} /></Grid>
      <Grid><Github size={32} /></Grid>
      <Grid><Github size={48} /></Grid>
      <Grid><Github size={64} /></Grid>
    </Grid.Container>
  )
};

export const Gallery: Story = {
  tags: ['!sidebar'],
  render: () => {
    const [query, setQuery] = useState('');
    const { setToast } = useToasts();
    const { copy } = useClipboard();
    
    // Exclude any potential non-component exports if they exist
    const icons = Object.entries(AllIcons).filter(([name]) => name !== 'default');
    const filteredIcons = icons.filter(([name]) => 
      name.toLowerCase().includes(query.toLowerCase())
    );

    const handleCopy = (name: string) => {
      copy(`import { ${name} } from '@geist-ui/icons'`);
      setToast({ text: `Copied ${name}`, type: 'success' });
    };

    return (
      <div style={{ width: '100%', height: '500px', display: 'flex', flexDirection: 'column' }}>
        <Input 
          width="100%" 
          placeholder="Search for an icon..." 
          icon={<Search />} 
          onChange={(e) => setQuery(e.target.value)} 
          clearable
        />
        <div style={{ 
          marginTop: '24px', 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', 
          gap: '16px',
          overflowY: 'auto',
          padding: '4px',
          flex: 1
        }}>
          {filteredIcons.map(([name, IconComponent]: [string, any]) => (
            <div 
              key={name} 
              onClick={() => handleCopy(name)}
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center', 
                padding: '16px 8px', 
                border: '1px solid #eaeaea', 
                borderRadius: '5px', 
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#000';
                e.currentTarget.style.color = '#000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#eaeaea';
                e.currentTarget.style.color = 'inherit';
              }}
            >
              <IconComponent size={24} />
              <Text span style={{ marginTop: '12px', fontSize: '11px', textAlign: 'center', wordBreak: 'break-word' }}>
                {name}
              </Text>
            </div>
          ))}
          {filteredIcons.length === 0 && (
            <Text style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#999' }}>
              No icons found for "{query}"
            </Text>
          )}
        </div>
      </div>
    );
  }
};
