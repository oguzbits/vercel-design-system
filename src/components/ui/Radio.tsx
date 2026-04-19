import React from "react";
import { Radio as GeistRadio, RadioGroupProps } from "@geist-ui/core";
import GeistRadioGroup from "@geist-ui/core/esm/radio/radio-group";
import GeistRadioDescription from "@geist-ui/core/esm/radio/radio-description";

const RadioGroup = (props: RadioGroupProps) => {
  const { useRow = false, disabled = false, ...rest } = props;
  return (
    <GeistRadioGroup useRow={useRow} disabled={disabled} {...(rest as any)} />
  );
};

const RadioComponent = React.forwardRef<any, any>((props, ref) => {
  const { disabled = false, checked = false, ...rest } = props as any;
  const { ref: _ref, ...cleanProps } = rest;
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            ".radio input { position: absolute !important; top: 0 !important; left: 0 !important; opacity: 0 !important; pointer-events: none !important; }",
        }}
      />
      <GeistRadio
        disabled={disabled}
        checked={checked}
        {...(cleanProps as any)}
      />
    </>
  );
});

export type RadioComponentType = React.FC<any> & {
  Group: any;
  Description: any;
  Desc: any;
};

const Radio = RadioComponent as any;
Radio.Group = RadioGroup;
Radio.Description = GeistRadioDescription;
Radio.Desc = GeistRadioDescription;
Radio.displayName = "Radio";

export { Radio };
