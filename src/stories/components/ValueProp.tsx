import React from "react";

interface ValuePropProps {
  items: {
    title: string;
    description: string;
    icon?: React.ReactNode;
  }[];
}

export const ValueProp: React.FC<ValuePropProps> = ({ items }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "24px",
        margin: "48px 0",
      }}
    >
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            padding: "32px",
            background: "#ffffff",
            border: "1px solid #eaeaea",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.02)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            cursor: "default",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.06)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.02)";
          }}
        >
          <div style={{ marginBottom: "16px", fontSize: "24px" }}>
            {item.icon}
          </div>
          <h3
            style={{
              margin: "0 0 12px 0",
              fontSize: "18px",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            {item.title}
          </h3>
          <p
            style={{
              margin: 0,
              fontSize: "15px",
              lineHeight: "1.6",
              color: "#666",
            }}
          >
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};
