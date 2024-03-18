import React, { useRef } from "react";
import SegmentedControl from "./SegmentedControl";

interface Props {
  labels: string[];
}

const getSegments = (labels: string[]) => {
  return labels.map((label) => {
    return {
      value: label,
      label,
      ref: useRef(null),
    };
  });
};

const SegmentedControlBtn = ({labels}:Props) => {
  const controlRef = useRef<HTMLDivElement | null>(null);

  return (
    <SegmentedControl
      name="group-1"
      callback={(val) => console.log(val)}
      defaultIndex={0}
      controlRef={controlRef} // Pass the created controlRef
      segments={getSegments(labels)}
    />
  );
};

export default SegmentedControlBtn;
