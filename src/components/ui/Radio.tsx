import React from 'react';
import { Radio as GeistRadio, RadioProps, RadioGroupProps } from '@geist-ui/core';

/**
 * Wrapper for Geist UI Radio to ensure compatibility with React 19.
 * 
 * Target hidden focus inputs that are positioned at -1000px, 
 * causing scroll-to-top issues on focus.
 */

const RadioGroup = (props: RadioGroupProps) => {
  const { useRow = false, disabled = false, ...rest } = props;
  return <GeistRadio.Group useRow={useRow} disabled={disabled} {...rest} />;
};

const RadioComponent = React.forwardRef<HTMLDivElement, RadioProps>((props, ref) => {
  const { disabled = false, checked = false, ...rest } = props as any;
  
  // Omit ref to prevent overwriting internal logic
  const { ref: _ref, ...cleanProps } = rest;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .radio input { 
          position: absolute !important; 
          top: 0 !important; 
          left: 0 !important; 
          opacity: 0 !important;
          pointer-events: none !important;
        }
      `}} />
      <GeistRadio disabled={disabled} checked={checked} {...cleanProps} />
    </>
  );
});

export const Radio = RadioComponent as typeof GeistRadio & {
  Group: typeof RadioGroup;
};

Radio.Group = RadioGroup;
Radio.displayName = 'Radio';
