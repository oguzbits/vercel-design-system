import React from "react";
import { Badge as GeistBadge } from "@geist-ui/core";
import GeistBadgeAnchor from "@geist-ui/core/esm/badge/badge-anchor";

const BadgeComponent: React.FC<any> = (props) => {
  return <GeistBadge {...(props as any)} />;
};

export type BadgeComponentType = React.FC<any> & {
  Anchor: any;
};

const Badge = BadgeComponent as BadgeComponentType;
Badge.Anchor = GeistBadgeAnchor;
Badge.displayName = "Badge";

export { Badge };
