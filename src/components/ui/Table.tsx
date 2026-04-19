import React from 'react'
import { Table as GeistTable } from '@geist-ui/core'
import GeistTableColumn from '@geist-ui/core/esm/table/table-column'

const TableComponent: React.FC<any> = (props) => {
  return <GeistTable {...(props as any)} />
}

export type TableComponentType = React.FC<any> & {
  Column: any;
}

const Table = TableComponent as TableComponentType
Table.Column = GeistTableColumn as any
Table.displayName = 'Table'

export { Table, GeistTableColumn as TableColumn }
