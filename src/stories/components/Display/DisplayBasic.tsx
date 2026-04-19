import React from 'react';
import { Display, Image, Grid, Text } from '@geist-ui/core';

export const Basic = {
  tags: ['!sidebar'],
  render: () => (
    <Grid.Container gap={2} direction="column">
      <Grid>
        <Display shadow caption="Geist UI Image Display">
          <Image src="https://geist-ui.dev/images/avatar.png" width="200px" height="200px" />
        </Display>
      </Grid>
    </Grid.Container>
  )
};

export const CustomCaption = {
  tags: ['!sidebar'],
  render: () => (
    <Grid.Container gap={2} direction="column">
      <Grid>
        <Display shadow caption={
          <Text p b>
            Custom <Text span type="success">Caption</Text>
          </Text>
        }>
          <Image src="https://geist-ui.dev/images/avatar.png" width="200px" height="200px" />
        </Display>
      </Grid>
    </Grid.Container>
  )
};
