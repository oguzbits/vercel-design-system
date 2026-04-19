import type { Meta, StoryObj } from '@storybook/react';
import { Page, Breadcrumbs, Tabs, Button, Grid, Text } from '@/components/ui';

const meta: Meta = {
  title: 'Patterns/Shell',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const ProfessionalDashboard: StoryObj = {
  render: () => (
    <Page style={{ padding: '0 24px' }}>
      <Page.Header>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '24px 0' }}>
          <Breadcrumbs>
            <Breadcrumbs.Item>Vercel</Breadcrumbs.Item>
            <Breadcrumbs.Item>Design System</Breadcrumbs.Item>
            <Breadcrumbs.Item>Settings</Breadcrumbs.Item>
          </Breadcrumbs>
          <Button type="secondary" auto scale={2/3}>Deploy</Button>
        </div>
        <Text h2 style={{ letterSpacing: '-0.04em', fontWeight: 800 }}>Project Settings</Text>
        <Tabs defaultValue="1">
          <Tabs.Item label="General" value="1" />
          <Tabs.Item label="Domains" value="2" />
          <Tabs.Item label="Integrations" value="3" />
        </Tabs>
      </Page.Header>
      <Page.Content>
        <Grid.Container gap={2}>
          <Grid xs={24}>
            <div style={{ border: '1px solid #eaeaea', borderRadius: '8px', padding: '32px', width: '100%' }}>
              <Text h4>Project Name</Text>
              <Text p type="secondary">This is your project's visible name within the dashboard.</Text>
            </div>
          </Grid>
        </Grid.Container>
      </Page.Content>
    </Page>
  ),
};
