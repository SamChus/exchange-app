

import React from "react";

interface Props {
  color: "red" | "green";
  length:
    | "one-hundred-and-twenty-eight"
    | "one-hundred-and-twelve"
    | "sixteen"
    | "twenty-four"
    | "forty-eight"
    | "eighty"
    | "two-hundred-and-twenty"
    | "twelve"
    | "thirty-two"
    | "one-hundred-and-ninety-six"
    | "one"
    | "one-hundred-and-sixty"
    | "two-hundred-and-fifty-six"
    | "eight"
    | "sixty-four";
  className: any;
}

export const Overlay = ({ color, length, className }: Props): JSX.Element => {
  return (
    <div
      className={`opacity-[0.15] h-[28px] ${
        length === "twenty-four"
          ? "w-[24px]"
          : length === "thirty-two"
          ? "w-[32px]"
          : length === "forty-eight"
          ? "w-[48px]"
          : length === "sixty-four"
          ? "w-[64px]"
          : length === "eighty"
          ? "w-[80px]"
          : length === "one-hundred-and-twelve"
          ? "w-[112px]"
          : length === "one-hundred-and-twenty-eight"
          ? "w-[128px]"
          : length === "one-hundred-and-sixty"
          ? "w-[160px]"
          : length === "one-hundred-and-ninety-six"
          ? "w-[196px]"
          : length === "two-hundred-and-twenty"
          ? "w-[220px]"
          : length === "two-hundred-and-fifty-six"
          ? "w-[256px]"
          : length === "twelve"
          ? "w-[12px]"
          : length === "eight"
          ? "w-[8px]"
          : length === "one"
          ? "w-px"
          : "w-[16px]"
      } ${color === "green" ? "bg-primary-4" : "bg-primary-3"} ${className}`}
    />
  );
};
