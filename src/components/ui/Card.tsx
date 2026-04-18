import React from 'react'
import { Card as GeistCard, CardProps } from '@geist-ui/core'

export interface MyCardProps extends CardProps {
  children: React.ReactNode
}

export const Card: React.FC<MyCardProps> = ({ children, ...props }) => {
  return <GeistCard {...props}>{children}</GeistCard>
}

export const CardContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <GeistCard.Content>{children}</GeistCard.Content>
}

export const CardFooter: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <GeistCard.Footer>{children}</GeistCard.Footer>
}
