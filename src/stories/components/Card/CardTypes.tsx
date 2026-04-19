import React from "react";
import { Card, Text, Grid } from "@/components/ui";

export const Types = () => (
  <Grid.Container gap={2}>
    <Grid xs={12} md={8}>
      <Card type="secondary">
        <Text h4 my={0} style={{ color: "white" }}>
          Secondary
        </Text>
        <Text p style={{ color: "white" }}>
          High contrast card type.
        </Text>
      </Card>
    </Grid>
    <Grid xs={12} md={8}>
      <Card type="success">
        <Text h4 my={0} style={{ color: "white" }}>
          Success
        </Text>
        <Text p style={{ color: "white" }}>
          Operation successful card.
        </Text>
      </Card>
    </Grid>
    <Grid xs={12} md={8}>
      <Card type="warning">
        <Text h4 my={0} style={{ color: "white" }}>
          Warning
        </Text>
        <Text p style={{ color: "white" }}>
          Potential issue card.
        </Text>
      </Card>
    </Grid>
    <Grid xs={12} md={8}>
      <Card type="error">
        <Text h4 my={0} style={{ color: "white" }}>
          Error
        </Text>
        <Text p style={{ color: "white" }}>
          Critical failure card.
        </Text>
      </Card>
    </Grid>
    <Grid xs={12} md={8}>
      <Card type="dark">
        <Text h4 my={0} style={{ color: "white" }}>
          Dark
        </Text>
        <Text p style={{ color: "white" }}>
          Dark themed card.
        </Text>
      </Card>
    </Grid>
    <Grid xs={12} md={8}>
      <Card type="lite">
        <Text h4 my={0}>
          Lite
        </Text>
        <Text p>Light themed card.</Text>
      </Card>
    </Grid>
  </Grid.Container>
);
