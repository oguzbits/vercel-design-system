import React from 'react'
import { Keyboard as GeistKeyboard, KeyboardProps } from '@geist-ui/core'
const KeyboardComponent: React.FC<any> = (props) => {
  const { label, children, ...rest } = props
  // Handle Geist components that might need children or specific props
  return <GeistKeyboard {...(rest as any)}>{label || children}</GeistKeyboard>
}

const FinalKeyboard = KeyboardComponent as any

FinalKeyboard.displayName = 'Keyboard'

export { FinalKeyboard as Keyboard }
