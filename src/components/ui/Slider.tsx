import React from 'react';
import { Slider as GeistSlider } from '@geist-ui/core';
const SliderComponent = React.forwardRef<any, any>((props, ref) => {
  const { initialValue = 0, step = 1, min = 0, max = 100, ...rest } = props as any;
  const { ref: _ref, ...cleanProps } = rest;
  return <GeistSlider initialValue={initialValue} step={step} min={min} max={max} {...(cleanProps as any)} />;
});
const Slider = SliderComponent as any;
Slider.displayName = 'Slider';
export { Slider };
