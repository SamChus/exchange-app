/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  darkMode: boolean | undefined;
  selected: boolean | undefined;
  className: any;
  labelClassName: any;
  text: string | undefined;
  text1: string | undefined;
  onClick: () => void;
}

export const Option = ({
  darkMode,
  selected,
  className,
  labelClassName,
  text = "On",
  text1 = "Off",
  onClick,
}: Props): JSX.Element => {
  return (
    <div
      className={`relative ${selected ? "border-[0.5px] border-solid" : ""} ${
        selected ? "border-[#0000000a]" : ""
      } ${!selected ? "w-[174px]" : "w-[175px]"} ${
        selected && !darkMode
          ? "shadow-[0px_3px_1px_#0000000a,0px_3px_8px_#0000001f]"
          : ""
      } ${!selected ? "h-[28px]" : "h-[29px]"} ${
        selected ? "rounded-[6.93px]" : ""
      } ${
        selected && !darkMode
          ? "bg-system-backgroundlightprimary"
          : selected && darkMode
          ? "bg-[#636366]"
          : ""
      } ${className}`}
      onClick={onClick}
    >
      <div
        className={`left-[8px] tracking-[-0.08px] text-[13px] h-[16px] text-center whitespace-nowrap leading-[20px] absolute ${
          !selected
            ? "[font-family:'SF_Pro_Text-Medium',Helvetica]"
            : "[font-family:'SF_Pro_Text-Semibold',Helvetica]"
        } ${darkMode && !selected ? "w-[159px]" : "w-[158px]"} ${
          !selected ? "top-[5px]" : "top-[6px]"
        } ${
          darkMode
            ? "text-label-colordarkprimary"
            : "text-label-colorlightprimary"
        } ${!selected ? "font-medium" : "font-normal"} ${labelClassName}`}
      >
        {selected && <>{text}</>}

        {!selected && <>{text1}</>}
      </div>
    </div>
  );
};
