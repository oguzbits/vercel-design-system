import React from 'react'
import { Display as GeistDisplay, DisplayProps } from '@geist-ui/core'
const DisplayComponent: React.FC<any> = (props) => {
  const { label, children, ...rest } = props
  // Handle Geist components that might need children or specific props
  return <GeistDisplay {...(rest as any)}>{label || children}</GeistDisplay>
}

const FinalDisplay = DisplayComponent as any

FinalDisplay.displayName = 'Display'

export { FinalDisplay as Display }
