import React from 'react'
import { Avatar as GeistAvatar } from '@geist-ui/core'
import GeistAvatarGroup from '@geist-ui/core/esm/avatar/avatar-group'

const AvatarComponent: React.FC<any> = (props) => {
  return <GeistAvatar {...(props as any)} />
}

export type AvatarComponentType = React.FC<any> & {
  Group: any;
}

const Avatar = AvatarComponent as AvatarComponentType
Avatar.Group = GeistAvatarGroup
Avatar.displayName = 'Avatar'

export { Avatar }
