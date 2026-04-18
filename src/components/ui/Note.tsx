import React from 'react'
import { Note as GeistNote, NoteProps } from '@geist-ui/core'

export const Note: React.FC<NoteProps> = (props) => {
  return <GeistNote {...props} />
}
