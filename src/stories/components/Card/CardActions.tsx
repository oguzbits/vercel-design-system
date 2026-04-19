import React from 'react';
import { Card, Text, Button, Link } from '@geist-ui/core';

export const Actions = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <Card shadow width="450px">
        <Card.Content>
          <Text h4>Project: antigravity</Text>
          <Text p>Advanced agentic coding environment for high-scale development.</Text>
        </Card.Content>
        <Card.Footer>
          <Link block href="#" color>View Project Settings</Link>
          <Button auto scale={2/3} type="secondary">Deploy</Button>
        </Card.Footer>
      </Card>
      
      <div style={{ padding: '20px 0' }}>
         <Card width="450px">
          <Card.Content>
            <Text b>System Health</Text>
            <Text small p>Cloud services are running as expected.</Text>
          </Card.Content>
          <Card.Footer style={{ justifyContent: 'space-between' }}>
             <Text small>All systems operational</Text>
             <Link block icon href="#">Details</Link>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
};
Actions.storyName = 'Sub-components (Footer/Content)';
