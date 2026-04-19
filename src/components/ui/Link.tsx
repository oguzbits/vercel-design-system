import React from 'react'
import { Link as GeistLink, LinkProps } from '@geist-ui/core'
const LinkComponent: React.FC<any> = (props) => {
  const { label, children, ...rest } = props
  // Handle Geist components that might need children or specific props
  return <GeistLink {...(rest as any)}>{label || children}</GeistLink>
}

const FinalLink = LinkComponent as any

FinalLink.displayName = 'Link'

export { FinalLink as Link }
