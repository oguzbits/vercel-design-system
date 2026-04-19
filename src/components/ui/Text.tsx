import React from 'react'
import { Text as GeistText, TextProps } from '@geist-ui/core'
const TextComponent: React.FC<any> = (props) => {
  const { label, children, ...rest } = props
  // Handle Geist components that might need children or specific props
  return <GeistText {...(rest as any)}>{label || children}</GeistText>
}

const FinalText = TextComponent as any

FinalText.displayName = 'Text'

export { FinalText as Text }
