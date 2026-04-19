import React from "react";
import { Input, Grid, Spacer, Text } from "@/components/ui";

export const Types = () => (
  <Grid.Container gap={2}>
    <Grid>
      <Input type="secondary" placeholder="Secondary" />
    </Grid>
    <Grid>
      <Input type="success" placeholder="Success" />
    </Grid>
    <Grid>
      <Input type="warning" placeholder="Warning" />
    </Grid>
    <Grid>
      <Input type="error" placeholder="Error" />
    </Grid>
    <Grid>
      <Input disabled placeholder="Disabled" />
    </Grid>
  </Grid.Container>
);

export const Sizes = () => (
  <Grid.Container gap={2} alignItems="center">
    <Grid>
      <Input scale={0.5} placeholder="Mini" />
    </Grid>
    <Grid>
      <Input scale={0.8} placeholder="Small" />
    </Grid>
    <Grid>
      <Input placeholder="Medium" />
    </Grid>
    <Grid>
      <Input scale={1.25} placeholder="Large" />
    </Grid>
    <Grid>
      <Input scale={1.5} placeholder="X-Large" />
    </Grid>
  </Grid.Container>
);
