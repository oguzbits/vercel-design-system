import React from 'react';
import { Select as GeistSelect } from '@geist-ui/core';
import GeistSelectOption from '@geist-ui/core/esm/select/select-option';

const SelectOption: React.FC<any> = (props) => {
  const { disabled = false, divider = false, label = false, preventAllEvents = false, ...rest } = props;
  return <GeistSelectOption disabled={disabled} divider={divider} label={label} preventAllEvents={preventAllEvents} {...(rest as any)} />;
};

const SelectComponent = React.forwardRef<any, any>((props, ref) => {
  const { disabled = false, type = 'default', multiple = false, clearable = true, disableMatchWidth = false, ...rest } = props as any;
  const { ref: _ref, ...cleanProps } = rest;
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: ".select input[role='combobox'] { position: absolute !important; top: 0 !important; left: 0 !important; width: 100% !important; height: 100% !important; opacity: 0 !important; z-index: -1 !important; pointer-events: none !important; }" }} />
      <GeistSelect disabled={disabled} type={type} multiple={multiple} clearable={clearable} disableMatchWidth={disableMatchWidth} {...(cleanProps as any)} />
    </>
  );
});

export type SelectComponentType = React.FC<any> & {
  Option: any;
};

const Select = SelectComponent as any;
Select.Option = SelectOption;
Select.displayName = 'Select';

export { Select };
