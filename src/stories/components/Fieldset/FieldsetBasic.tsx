import React from 'react';
import { Fieldset, Button, Text, Divider } from '@geist-ui/core';

export const Basic = {
  tags: ['!sidebar'],
  render: () => (
    <Fieldset>
      <Fieldset.Title>HTTP is simple</Fieldset.Title>
      <Fieldset.Subtitle>HTTP is generally designed to be simple and human readable, even with the added complexity introduced in HTTP/2 by encapsulating HTTP messages into frames. HTTP messages can be read and understood by humans, providing easier testing for developers, and reduced complexity for newcomers.</Fieldset.Subtitle>
      <Fieldset.Footer>
        HTTP Knowledge Base
        <Button auto scale={1/3} font="12px">OK</Button>
      </Fieldset.Footer>
    </Fieldset>
  )
};

export const CustomText = {
  tags: ['!sidebar'],
  render: () => (
    <Fieldset>
      <Fieldset.Title>HTTP is extensible</Fieldset.Title>
      <Fieldset.Subtitle>Introduced in HTTP/1.0, HTTP headers make this protocol easy to extend and experiment with. </Fieldset.Subtitle>
      <Fieldset.Footer>
        <Text type="error" margin={0}>An error has occurred.</Text>
        <Button auto scale={1/3} type="error" font="12px">Revert</Button>
      </Fieldset.Footer>
    </Fieldset>
  )
};

export const Tabs = {
  tags: ['!sidebar'],
  render: () => {
    const handler = (v: string) => console.log(v);
    return (
      <Fieldset.Group value="extensible" onChange={handler}>
        <Fieldset label="simple">
          <Fieldset.Title>HTTP is simple</Fieldset.Title>
          <Fieldset.Subtitle>HTTP is generally designed to be simple and human readable, even with the added complexity introduced in HTTP/2 by encapsulating HTTP messages into frames.</Fieldset.Subtitle>
          <Fieldset.Footer>
            HTTP Knowledge Base
            <Button auto scale={1/3} font="12px">Actions</Button>
          </Fieldset.Footer>
        </Fieldset>
        <Fieldset label="extensible">
          <Fieldset.Title>HTTP is extensible</Fieldset.Title>
          <Fieldset.Subtitle>Introduced in HTTP/1.0, HTTP headers make this protocol easy to extend and experiment with.</Fieldset.Subtitle>
          <Fieldset.Footer>
            HTTP Knowledge Base
            <Button auto scale={1/3} font="12px">Actions</Button>
          </Fieldset.Footer>
        </Fieldset>
        <Fieldset label="stateless">
          <Fieldset.Title>HTTP is stateless</Fieldset.Title>
          <Fieldset.Subtitle>HTTP is stateless: there is no link between two requests being successively carried out on the same connection. </Fieldset.Subtitle>
          <Fieldset.Footer>
            HTTP Knowledge Base
            <Button auto scale={1/3} font="12px">Actions</Button>
          </Fieldset.Footer>
        </Fieldset>
      </Fieldset.Group>
    );
  }
};

export const WithDivider = {
  tags: ['!sidebar'],
  render: () => (
    <Fieldset>
      <Fieldset.Content style={{ paddingTop: '10pt', paddingBottom: '10pt' }}>
        <h4 style={{ margin: 0 }}>Prerequisites</h4>
      </Fieldset.Content>
      <Divider my={0} />
      <Fieldset.Content>
        <Fieldset.Title>Basic knowledge of HTML and CSS would also be useful.</Fieldset.Title>
        <p>To get the most out of this module, you should have worked your way through the previous JavaScript modules in the series.
        Those modules typically involve simple API usage, as it is often difficult to write client-side JavaScript examples without them. </p>
      </Fieldset.Content>
      <Fieldset.Footer>
        <small>Client-side web APIs</small>
      </Fieldset.Footer>
    </Fieldset>
  )
};
