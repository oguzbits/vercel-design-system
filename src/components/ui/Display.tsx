import React from 'react'
import { Avatar as GeistAvatar, AvatarProps, Badge as GeistBadge, BadgeProps } from '@geist-ui/core'

export const Avatar: React.FC<AvatarProps> = (props) => {
  return <GeistAvatar {...props} />
}

export const Badge: React.FC<BadgeProps> = (props) => {
  return <GeistBadge {...props} />
}
