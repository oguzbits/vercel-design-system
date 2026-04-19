import React from 'react'
import { Collapse as GeistCollapse } from '@geist-ui/core'
import GeistCollapseGroup from '@geist-ui/core/esm/collapse/collapse-group'

const CollapseComponent: React.FC<any> = (props) => {
  return <GeistCollapse {...(props as any)} />
}

export type CollapseComponentType = React.FC<any> & {
  Group: any;
}

const Collapse = CollapseComponent as CollapseComponentType
Collapse.Group = GeistCollapseGroup
Collapse.displayName = 'Collapse'

export { Collapse }
