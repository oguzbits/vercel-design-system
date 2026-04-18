import React from 'react';
import { Page, Text, Breadcrumbs, User, Button, Spacer, Grid } from '@geist-ui/core';
import { Github, Bell, Settings } from '@geist-ui/icons';

interface ShellProps {
  children: React.ReactNode;
  username: string;
  projectName: string;
}

export const Shell: React.FC<ShellProps> = ({ children, username, projectName }) => {
  return (
    <Page style={{ padding: 0 }}>
      {/* Top Header */}
      <div style={{ borderBottom: '1px solid var(--accents-2)', padding: '0.75rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <svg
            aria-label="Vercel Logo"
            fill="var(--geist-foreground)"
            viewBox="0 0 75 65"
            height="26"
            width="30"
          >
            <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
          </svg>
          <Breadcrumbs>
            <Breadcrumbs.Item>{username}</Breadcrumbs.Item>
            <Breadcrumbs.Item>{projectName}</Breadcrumbs.Item>
          </Breadcrumbs>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Button icon={<Bell />} auto type="abort" px={0.5} />
          <Button icon={<Settings />} auto type="abort" px={0.5} />
          <User src="https://github.com/vercel.png" name="Vercel" />
        </div>
      </div>

      {/* Main Content */}
      <Page.Content style={{ maxWidth: '1200px', margin: '0 auto', paddingTop: '2rem' }}>
        {children}
      </Page.Content>
    </Page>
  );
};
