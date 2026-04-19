import React from 'react'
import { Drawer as GeistDrawer } from '@geist-ui/core'
import ModalTitle from '@geist-ui/core/esm/modal/modal-title'
import ModalSubtitle from '@geist-ui/core/esm/modal/modal-subtitle'
import ModalContent from '@geist-ui/core/esm/modal/modal-content'

const DrawerComponent: React.FC<any> = (props) => {
  return <GeistDrawer {...(props as any)} />
}

export type DrawerComponentType = React.FC<any> & {
  Title: any;
  Subtitle: any;
  Content: any;
}

const Drawer = DrawerComponent as DrawerComponentType
Drawer.Title = ModalTitle
Drawer.Subtitle = ModalSubtitle
Drawer.Content = ModalContent
Drawer.displayName = 'Drawer'

export { Drawer }
