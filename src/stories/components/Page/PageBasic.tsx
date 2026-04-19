import React from "react";
import { Page, Text, Button } from "@/components/ui";

const MockPage = ({ visible, onClose, children }: any) => {
  if (!visible) return null;
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.4)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "white",
          width: "80%",
          height: "80%",
          borderRadius: "6px",
          overflow: "hidden",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export const Basic = {
  tags: ["!sidebar"],
  render: () => {
    const Child = () => (
      <>
        <Text h2>Hello, Everyone.</Text>
        <Text p>
          This is a simulated page, you can click anywhere to close it.
        </Text>
      </>
    );
    const [visible, setVisible] = React.useState(false);
    return (
      <>
        <Button onClick={() => setVisible(true)} auto>
          Show Page
        </Button>
        <MockPage visible={visible} onClose={() => setVisible(false)}>
          <Page>
            <Child />
          </Page>
        </MockPage>
      </>
    );
  },
};

export const Content = {
  tags: ["!sidebar"],
  render: () => {
    const [visible, setVisible] = React.useState(false);
    return (
      <>
        <Button onClick={() => setVisible(true)} auto>
          Header & Footer
        </Button>
        <MockPage visible={visible} onClose={() => setVisible(false)}>
          <Page>
            <Page.Header>
              <Text h2>Header</Text>
            </Page.Header>
            <Page.Content>
              <Text h2>Hello, Everyone.</Text>
              <Text p>
                This is a simulated page, you can click anywhere to close it.
              </Text>
            </Page.Content>
            <Page.Footer>
              <Text h2>Footer</Text>
            </Page.Footer>
          </Page>
        </MockPage>
      </>
    );
  },
};
