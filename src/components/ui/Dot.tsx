import React from 'react'
import { Dot as GeistDot, DotProps } from '@geist-ui/core'
const DotComponent: React.FC<any> = (props) => {
  const { label, children, ...rest } = props
  // Handle Geist components that might need children or specific props
  return <GeistDot {...(rest as any)}>{label || children}</GeistDot>
}

const FinalDot = DotComponent as any

FinalDot.displayName = 'Dot'

export { FinalDot as Dot }
