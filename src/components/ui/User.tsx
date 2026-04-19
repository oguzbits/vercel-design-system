import React from 'react'
import { User as GeistUser } from '@geist-ui/core'
import GeistUserLink from '@geist-ui/core/esm/user/user-link'

const UserComponent: React.FC<any> = (props) => {
  return <GeistUser {...(props as any)} />
}

export type UserComponentType = React.FC<any> & {
  Link: any;
}

const User = UserComponent as UserComponentType
User.Link = GeistUserLink as any
User.displayName = 'User'

export { User }
