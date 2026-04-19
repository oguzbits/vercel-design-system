import React from 'react';
import { Select as GeistSelect, SelectProps } from '@geist-ui/core';

/**
 * Wrapper for Geist UI Select to ensure compatibility with React 19.
 * 
 * In React 19, 'ref' is passed as a prop. Geist UI components capture this ref
 * via {...props} and overwrite their internal refs, breaking measurement and focus logic.
 * This wrapper omits 'ref' and provides explicit defaults for React 19.
 */

const SelectOption: React.FC<any> = (props) => {
  const { 
    disabled = false, 
    divider = false, 
    label = false, 
    preventAllEvents = false, 
    ...rest 
  } = props;
  return (
    <GeistSelect.Option 
      disabled={disabled} 
      divider={divider} 
      label={label} 
      preventAllEvents={preventAllEvents} 
      {...rest} 
    />
  );
};

export const Select = React.forwardRef<HTMLDivElement, SelectProps>((props, ref) => {
  const { 
    disabled = false,
    type = 'default',
    multiple = false,
    clearable = true,
    disableMatchWidth = false,
    ...rest 
  } = props as any;

  // Omit 'ref' to prevent overwriting Geist's internal ref
  const { ref: _ref, ...cleanProps } = rest;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .select input[role="combobox"] { 
          position: absolute !important; 
          top: 0 !important; 
          left: 0 !important; 
          width: 100% !important;
          height: 100% !important;
          opacity: 0 !important;
          z-index: -1 !important;
          pointer-events: none !important;
        }
      `}} />
      <GeistSelect 
        disabled={disabled}
        type={type}
        multiple={multiple}
        clearable={clearable}
        disableMatchWidth={disableMatchWidth}
        {...cleanProps}
      />
    </>
  );
}) as React.ForwardRefExoticComponent<SelectProps> & {
  Option: typeof SelectOption;
};

Select.Option = SelectOption;
Select.displayName = 'Select';
