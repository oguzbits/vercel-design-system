import React from 'react';
import { Collapse, Text } from '@/components/ui';

export const Basic = {
  tags: ['!sidebar'],
  render: () => (
    <Collapse.Group>
      <Collapse title="Question A">
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
      </Collapse>
      <Collapse title="Question B">
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
      </Collapse>
    </Collapse.Group>
  )
};

export const Expanded = {
  tags: ['!sidebar'],
  render: () => (
    <Collapse.Group>
      <Collapse title="Question A" initialVisible>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
      </Collapse>
      <Collapse title="Question B">
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
      </Collapse>
    </Collapse.Group>
  )
};

export const Subtitle = {
  tags: ['!sidebar'],
  render: () => (
    <Collapse.Group>
      <Collapse title="Question A" subtitle="More description about Question A">
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
      </Collapse>
      <Collapse title="Question B" subtitle={<>More description about <Text b>Question B</Text></>}>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
      </Collapse>
    </Collapse.Group>
  )
};

export const Shadow = {
  tags: ['!sidebar'],
  render: () => (
    <Collapse shadow title="Question A" subtitle="More description about Question A">
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
    </Collapse>
  )
};
