import React from 'react'
import { Image as GeistImage } from '@geist-ui/core'
import GeistImageBrowser from '@geist-ui/core/esm/image/image-browser'

const ImageComponent: React.FC<any> = (props) => {
  return <GeistImage {...(props as any)} />
}

export type ImageComponentType = React.FC<any> & {
  Browser: any;
}

const Image = ImageComponent as ImageComponentType
Image.Browser = GeistImageBrowser as any
Image.displayName = 'Image'

export { Image }
