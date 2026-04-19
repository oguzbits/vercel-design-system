import React from "react";
import { Loading, Grid } from "@/components/ui";

export const Basic = {
  tags: ["!sidebar"],
  render: () => <Loading />,
};

export const Text = {
  tags: ["!sidebar"],
  render: () => <Loading>Loading</Loading>,
};

export const Type = {
  tags: ["!sidebar"],
  render: () => (
    <Grid.Container gap={2}>
      <Loading type="success" />
      <Loading type="warning" />
      <Loading type="error" />
      <Loading type="secondary" />
    </Grid.Container>
  ),
};

export const Color = {
  tags: ["!sidebar"],
  render: () => <Loading color="red" />,
};
