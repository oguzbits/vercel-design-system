import React from 'react'
import { Snippet as GeistSnippet, SnippetProps } from '@geist-ui/core'

export const Snippet: React.FC<SnippetProps> = (props) => {
  return <GeistSnippet {...props} />
}
