import React from 'react'
import { Capacity as GeistCapacity, CapacityProps } from '@geist-ui/core'
const CapacityComponent: React.FC<any> = (props) => {
  const { label, children, ...rest } = props
  // Handle Geist components that might need children or specific props
  return <GeistCapacity {...(rest as any)}>{label || children}</GeistCapacity>
}

const FinalCapacity = CapacityComponent as any

FinalCapacity.displayName = 'Capacity'

export { FinalCapacity as Capacity }
