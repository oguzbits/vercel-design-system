import React from 'react'
import { Spinner as GeistSpinner, SpinnerProps } from '@geist-ui/core'
const SpinnerComponent: React.FC<any> = (props) => {
  const { label, children, ...rest } = props
  // Handle Geist components that might need children or specific props
  return <GeistSpinner {...(rest as any)}>{label || children}</GeistSpinner>
}

const FinalSpinner = SpinnerComponent as any

FinalSpinner.displayName = 'Spinner'

export { FinalSpinner as Spinner }
