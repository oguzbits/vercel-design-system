import { useState } from "react";
import { Spacer } from "@/components/ui";
import { Slider } from "@/components/ui";

export const Basic = {
  tags: ["!sidebar"],
  render: () => <Slider initialValue={20} />,
};

export const Type = {
  tags: ["!sidebar"],
  render: () => (
    <>
      <Slider type="default" initialValue={20} />
      <Spacer />
      <Slider type="success" initialValue={20} />
      <Spacer />
      <Slider type="warning" initialValue={20} />
      <Spacer />
      <Slider type="error" initialValue={20} />
    </>
  ),
};

export const Disabled = {
  tags: ["!sidebar"],
  render: () => <Slider initialValue={50} disabled />,
};

export const Step = {
  tags: ["!sidebar"],
  render: () => <Slider step={10} showMarkers width="75%" />,
};

export const Range = {
  tags: ["!sidebar"],
  render: () => (
    <>
      <Slider
        step={5}
        max={50}
        min={10}
        initialValue={25}
        showMarkers
        width="75%"
      />
      <Spacer />
      <Slider
        step={0.2}
        max={1}
        min={0.2}
        initialValue={0.4}
        showMarkers
        width="75%"
      />
    </>
  ),
};

export const Event = {
  tags: ["!sidebar"],
  render: function Render() {
    const [value, setValue] = useState(0);
    const handler = (val: number) => {
      console.log(val);
      setValue(val);
    };
    return <Slider value={value} onChange={handler} width="75%" />;
  },
};
