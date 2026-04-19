import React from 'react'
import { AutoComplete as GeistAutoComplete } from '@geist-ui/core'
import GeistAutoCompleteItem from '@geist-ui/core/esm/auto-complete/auto-complete-item'
import GeistAutoCompleteSearching from '@geist-ui/core/esm/auto-complete/auto-complete-searching'
import GeistAutoCompleteEmpty from '@geist-ui/core/esm/auto-complete/auto-complete-empty'

const AutoCompleteComponent: React.FC<any> = (props) => {
  return <GeistAutoComplete {...(props as any)} />
}

export type AutoCompleteComponentType = React.FC<any> & {
  Item: any;
  Option: any;
  Searching: any;
  Empty: any;
}

const AutoComplete = AutoCompleteComponent as AutoCompleteComponentType
AutoComplete.Item = GeistAutoCompleteItem
AutoComplete.Option = GeistAutoCompleteItem
AutoComplete.Searching = GeistAutoCompleteSearching
AutoComplete.Empty = GeistAutoCompleteEmpty
AutoComplete.displayName = 'AutoComplete'

export { AutoComplete }
