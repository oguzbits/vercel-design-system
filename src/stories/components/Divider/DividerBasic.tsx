import React from "react";
import { Divider, Grid, Text } from "@/components/ui";

export const Basic = {
  tags: ["!sidebar"],
  render: () => (
    <Grid.Container direction="column">
      <Grid>
        <Text p>Upper Section</Text>
      </Grid>
      <Grid>
        <Divider />
      </Grid>
      <Grid>
        <Text p>Lower Section</Text>
      </Grid>
    </Grid.Container>
  ),
};

export const Types = {
  tags: ["!sidebar"],
  decorators: [
    (Story: any) => (
      <div style={{ width: "100%" }}>
        <Story />
      </div>
    ),
  ],
  render: () => (
    <Grid.Container direction="column" gap={2}>
      <Grid xs={24}>
        <Divider type="success" mb={0} mt={0}>
          <Text small>Success</Text>
        </Divider>
      </Grid>
      <Grid xs={24}>
        <Divider type="warning" mb={0} mt={0}>
          <Text small>Warning</Text>
        </Divider>
      </Grid>
      <Grid xs={24}>
        <Divider type="error" mb={0} mt={0}>
          <Text small>Error</Text>
        </Divider>
      </Grid>
      <Grid xs={24}>
        <Divider type="secondary" mb={0} mt={0}>
          <Text small>Secondary</Text>
        </Divider>
      </Grid>
      <Grid xs={24}>
        <Divider type="dark" mb={0} mt={0}>
          <Text small>Dark</Text>
        </Divider>
      </Grid>
    </Grid.Container>
  ),
};

export const Alignment = {
  tags: ["!sidebar"],
  render: () => (
    <Grid.Container direction="column">
      <Grid>
        <Divider align="start">Start</Divider>
      </Grid>
      <Grid>
        <Divider align="center">Center</Divider>
      </Grid>
      <Grid>
        <Divider align="end">End</Divider>
      </Grid>
    </Grid.Container>
  ),
};
