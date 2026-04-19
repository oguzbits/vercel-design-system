import React from 'react'
import { Toggle as GeistToggle } from '@geist-ui/core'
import type { ToggleEvent } from '@geist-ui/core/esm/toggle'

const ToggleComponent: React.FC<any> = (props) => {
  return <GeistToggle {...(props as any)} />
}

ToggleComponent.displayName = 'Toggle'

export { ToggleComponent as Toggle, type ToggleEvent }
