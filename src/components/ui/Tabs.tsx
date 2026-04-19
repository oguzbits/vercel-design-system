import React from 'react'
import { Tabs as GeistTabs } from '@geist-ui/core'
import GeistTabsItem from '@geist-ui/core/esm/tabs/tabs-item'

const TabsComponent: React.FC<any> = (props) => {
  return <GeistTabs {...(props as any)} />
}

export type TabsComponentType = React.FC<any> & {
  Item: any;
  Tab: any;
}

const Tabs = TabsComponent as TabsComponentType
Tabs.Item = GeistTabsItem as any
Tabs.Tab = GeistTabsItem as any
Tabs.displayName = 'Tabs'

export { Tabs }
