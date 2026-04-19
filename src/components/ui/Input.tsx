import React from 'react'
import { Input as GeistInput } from '@geist-ui/core'
import GeistInputPassword from '@geist-ui/core/esm/input/password'

const InputComponent: React.FC<any> = (props) => {
  return <GeistInput {...(props as any)} />
}

export type InputComponentType = React.FC<any> & {
  Password: any;
}

const Input = InputComponent as InputComponentType
Input.Password = GeistInputPassword as any
Input.displayName = 'Input'

export { Input, GeistInputPassword as PasswordInput }
