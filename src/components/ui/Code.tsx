import React from 'react'
import { Code as GeistCode, CodeProps } from '@geist-ui/core'
const CodeComponent: React.FC<any> = (props) => {
  const { label, children, ...rest } = props
  // Handle Geist components that might need children or specific props
  return <GeistCode {...(rest as any)}>{label || children}</GeistCode>
}

const FinalCode = CodeComponent as any

FinalCode.displayName = 'Code'

export { FinalCode as Code }
