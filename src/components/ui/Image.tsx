import React from 'react';
import { Image as GeistImage, ImageProps } from '@geist-ui/core';

/**
 * Wrapper for Geist UI Image to ensure compatibility with React 19.
 * 
 * Provides explicit default values and fixes type issues for Image.Browser
 * which React 19 no longer supports via 'defaultProps'.
 */

const ImageBrowser: React.FC<any> = (props) => {
  const { 
    showFullLink = false, 
    anchorProps = {}, 
    invert = false, 
    ...rest 
  } = props;
  return <GeistImage.Browser showFullLink={showFullLink} anchorProps={anchorProps} invert={invert} {...rest} />;
};

const ImageWrapper: React.FC<ImageProps> & {
  Browser: typeof ImageBrowser;
} = (props) => {
  return <GeistImage {...props} />;
};

ImageWrapper.Browser = ImageBrowser;

export const Image = ImageWrapper;
export type { ImageProps };
