import React from "react";
import { Grid, Card, Text } from "@/components/ui";

const Placeholder = ({ text }: { text: string }) => (
  <Card shadow width="100%" style={{ background: "#f8f8f8" }}>
    <Text style={{ textAlign: "center" }}>{text}</Text>
  </Card>
);

export const General = {
  tags: ["!sidebar"],
  render: () => (
    <Grid.Container gap={2} justify="center">
      <Grid xs={24} md={12}>
        <Placeholder text="xs={24} md={12}" />
      </Grid>
      <Grid xs={24} md={12}>
        <Placeholder text="xs={24} md={12}" />
      </Grid>
      <Grid xs={12} md={6}>
        <Placeholder text="xs={12} md={6}" />
      </Grid>
      <Grid xs={12} md={6}>
        <Placeholder text="xs={12} md={6}" />
      </Grid>
      <Grid xs={12} md={6}>
        <Placeholder text="xs={12} md={6}" />
      </Grid>
      <Grid xs={12} md={6}>
        <Placeholder text="xs={12} md={6}" />
      </Grid>
    </Grid.Container>
  ),
};

export const Fluid = {
  tags: ["!sidebar"],
  render: () => (
    <Grid.Container gap={2} direction="row">
      <Grid xs>
        <Placeholder text="Dynamic Width" />
      </Grid>
      <Grid xs>
        <Placeholder text="Dynamic Width" />
      </Grid>
      <Grid xs>
        <Placeholder text="Dynamic Width" />
      </Grid>
    </Grid.Container>
  ),
};

export const Responsive = {
  tags: ["!sidebar"],
  render: () => (
    <Grid.Container gap={2}>
      <Grid xs={24} sm={12} md={8} lg={6} xl={4}>
        <Placeholder text="Responsive" />
      </Grid>
      <Grid xs={24} sm={12} md={8} lg={6} xl={4}>
        <Placeholder text="Responsive" />
      </Grid>
      <Grid xs={24} sm={12} md={8} lg={6} xl={4}>
        <Placeholder text="Responsive" />
      </Grid>
    </Grid.Container>
  ),
};

export const HideElements = {
  tags: ["!sidebar"],
  render: () => (
    <Grid.Container gap={2}>
      <Grid xs={24} md={0}>
        <Placeholder text="Hidden on md and larger (md={0})" />
      </Grid>
      <Grid xs={0} md={24}>
        <Placeholder text="Hidden on xs and sm (xs={0})" />
      </Grid>
    </Grid.Container>
  ),
};

export const AutoWidth = {
  tags: ["!sidebar"],
  render: () => (
    <Grid.Container gap={2}>
      <Grid xs={24} md="auto">
        <Placeholder text="Auto width based on content" />
      </Grid>
      <Grid xs={24} md>
        <Placeholder text="Takes remaining space" />
      </Grid>
    </Grid.Container>
  ),
};
