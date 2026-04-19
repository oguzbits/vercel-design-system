import React from 'react'
import { ButtonDropdown as GeistButtonDropdown } from '@geist-ui/core'
import GeistButtonDropdownItem from '@geist-ui/core/esm/button-dropdown/button-dropdown-item'

const ButtonDropdownComponent: React.FC<any> = (props) => {
  return <GeistButtonDropdown {...(props as any)} />
}

export type ButtonDropdownComponentType = React.FC<any> & {
  Item: any;
}

const ButtonDropdown = ButtonDropdownComponent as ButtonDropdownComponentType
ButtonDropdown.Item = GeistButtonDropdownItem
ButtonDropdown.displayName = 'ButtonDropdown'

export { ButtonDropdown }
