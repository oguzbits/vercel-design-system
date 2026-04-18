import React from 'react'
import { Input as GeistInput, InputProps } from '@geist-ui/core'

export const Input: React.FC<InputProps> = (props) => {
  return <GeistInput {...props} />
}

export const PasswordInput: React.FC<InputProps> = (props) => {
  return <GeistInput.Password {...props} />
}
