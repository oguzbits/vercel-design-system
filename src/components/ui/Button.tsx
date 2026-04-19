import React from 'react'
import { Button as GeistButton, ButtonProps } from '@geist-ui/core'
const ButtonComponent: React.FC<any> = (props) => {
  const { label, children, ...rest } = props
  // Handle Geist components that might need children or specific props
  return <GeistButton {...(rest as any)}>{label || children}</GeistButton>
}

const FinalButton = ButtonComponent as any

FinalButton.displayName = 'Button'

export { FinalButton as Button }
