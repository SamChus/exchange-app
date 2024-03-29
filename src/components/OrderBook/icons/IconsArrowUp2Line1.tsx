import React from "react";

interface Props {
  className: any;
}

export const IconsArrowUp2Line1 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 17 16"
      width="17"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M11.6565 6.606C11.9062 6.33545 11.8894 5.91368 11.6188 5.66394L9.28553 3.51009C9.03015 3.27436 8.63653 3.27436 8.38115 3.51009L6.04779 5.66394C5.77724 5.91367 5.76037 6.33544 6.01011 6.60599C6.25984 6.87654 6.68161 6.89341 6.95216 6.64368L8.16667 5.5226L8.16667 12C8.16667 12.3681 8.46515 12.6666 8.83333 12.6666C9.20152 12.6666 9.5 12.3681 9.5 12L9.5 5.52263L10.7145 6.64367C10.985 6.89341 11.4068 6.87654 11.6565 6.606Z"
        fill="#25C26E"
        fillRule="evenodd"
      />
    </svg>
  );
};
