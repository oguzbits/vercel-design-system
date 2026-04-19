import React from 'react';
import { Page, Text, Spacer, Breadcrumbs } from '@geist-ui/core';

export const Default = () => {
  return (
    <div style={{ background: '#fafafa', minHeight: '100vh', width: '100%' }}>
      <Page>
        <Page.Header>
          <Breadcrumbs>
            <Breadcrumbs.Item>Vercel</Breadcrumbs.Item>
            <Breadcrumbs.Item>Design System</Breadcrumbs.Item>
          </Breadcrumbs>
          <Text h2>Project Overview</Text>
        </Page.Header>
        <Page.Content>
          <Text h3>Welcome to Geist UI</Text>
          <Text p>
            The Page component provides a standardized container for your application's content, ensuring consistent margins and responsive behavior across different screen sizes.
          </Text>
          <Spacer h={5} />
        </Page.Content>
        <Page.Footer>
          <Text small>Copyright &copy; 2024 Vercel Inc.</Text>
        </Page.Footer>
      </Page>
    </div>
  );
};
Default.storyName = 'Default Layout';
