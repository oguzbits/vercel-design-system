import React from 'react'
import { Loading as GeistLoading, LoadingProps } from '@geist-ui/core'
const LoadingComponent: React.FC<any> = (props) => {
  const { label, children, ...rest } = props
  // Handle Geist components that might need children or specific props
  return <GeistLoading {...(rest as any)}>{label || children}</GeistLoading>
}

const FinalLoading = LoadingComponent as any

FinalLoading.displayName = 'Loading'

export { FinalLoading as Loading }
