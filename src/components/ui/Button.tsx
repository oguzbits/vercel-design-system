import React from 'react'
import { Button as GeistButton, ButtonProps } from '@geist-ui/core'

export interface MyButtonProps extends ButtonProps {
  label: string
}

export const Button: React.FC<MyButtonProps> = ({ label, ...props }) => {
  return <GeistButton {...props}>{label}</GeistButton>
}
