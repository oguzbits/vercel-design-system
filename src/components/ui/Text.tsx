import React from 'react'
import { Text as GeistText, TextProps } from '@geist-ui/core'

export interface MyTextProps extends TextProps {
  children: React.ReactNode
}

/**
 * Typography component for standardized text styles.
 * Supports h1-h6, p, small, b, i, del, em, strong, blockquote.
 */
export const Text: React.FC<MyTextProps> = ({ children, ...props }) => {
  return <GeistText {...props}>{children}</GeistText>
}
