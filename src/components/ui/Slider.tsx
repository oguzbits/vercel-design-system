import React from 'react';
import { Slider as GeistSlider, SliderProps } from '@geist-ui/core';

/**
 * Wrapper for Geist UI Slider to ensure compatibility with React 19.
 * 
 * In React 19, 'ref' is passed as a prop to functional components.
 * Geist UI's Slider captures this ref via {...props} and overwrites its
 * internal measurement ref, causing the slider to snap to 0 or 100.
 * 
 * This wrapper omits 'ref' and provides explicit default values that
 * React 19 no longer supports via 'defaultProps'.
 */
export const Slider = React.forwardRef<HTMLDivElement, SliderProps>((props, ref) => {
  const { 
    initialValue = 0, 
    step = 1, 
    min = 0, 
    max = 100, 
    ...rest 
  } = props as any;

  // We omit 'ref' from rest by destructuring it out if it exists
  const { ref: _ref, ...cleanProps } = rest;

  return (
    <GeistSlider 
      initialValue={initialValue} 
      step={step} 
      min={min} 
      max={max} 
      {...cleanProps} 
    />
  );
});

Slider.displayName = 'Slider';
