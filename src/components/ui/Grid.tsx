import React from 'react'
import { Grid as GeistGrid } from '@geist-ui/core'
import GeistGridContainer from '@geist-ui/core/esm/grid/grid-container'

const GridComponent: React.FC<any> = (props) => {
  return <GeistGrid {...(props as any)} />
}

export type GridComponentType = React.FC<any> & {
  Container: any;
}

const Grid = GridComponent as GridComponentType
Grid.Container = GeistGridContainer as any
Grid.displayName = 'Grid'

export { Grid }
