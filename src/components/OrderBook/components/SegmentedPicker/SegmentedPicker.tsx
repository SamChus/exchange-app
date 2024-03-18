/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { useReducer } from "react";
import { Option } from "../Option";

interface Props {
  darkMode: boolean;
  options: "four-options" | "two-options" | "three-options";
  selected:
    | "right-center-selected"
    | "right-selected"
    | "left-selected"
    | "center-selected"
    | "left-center-selected";
  className: any;
  optionLabelClassName: any;
  optionDarkModeFalseClassName: any;
  optionText: string;
  optionText1: string;
  optionLabelClassNameOverride: any;
}

export const SegmentedPicker = ({
  darkMode,
  options,
  selected,
  className,
  optionLabelClassName,
  optionDarkModeFalseClassName,
  optionText = "On",
  optionText1 = "Off",
  optionLabelClassNameOverride,
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    darkMode: darkMode,

    options: options || "two-options",
    selected: selected || "right-selected",
  });

  return (
    <div
      className={`w-[343px] flex items-start p-[2px] overflow-hidden rounded-[8.91px] relative ${
        (!state.darkMode &&
          state.options === "four-options" &&
          state.selected === "left-selected") ||
        (state.options === "four-options" &&
          state.selected === "right-selected") ||
        state.options === "three-options" ||
        state.options === "two-options" ||
        state.selected === "left-center-selected" ||
        state.selected === "right-center-selected"
          ? "h-[32px]"
          : ""
      } ${
        state.darkMode
          ? "bg-fill-colordarktertiary"
          : "bg-fill-colorlighttertiary"
      } ${className}`}
    >
      <Option
        className={
          (state.options === "four-options" &&
            state.selected === "right-selected") ||
          (state.options === "three-options" &&
            state.selected === "right-selected") ||
          state.selected === "center-selected" ||
          state.selected === "left-center-selected" ||
          state.selected === "right-center-selected"
            ? "!self-stretch !h-[unset] !flex-1 !grow !w-[unset]"
            : state.selected === "left-selected" &&
              ["four-options", "three-options"].includes(state.options)
            ? "!self-stretch !h-[unset] !mt-[-0.50px] !ml-[-0.50px] !mb-[-0.50px] !flex-1 !grow !w-[unset]"
            : state.options === "two-options"
            ? optionDarkModeFalseClassName
            : undefined
        }
        darkMode={state.darkMode ? true : undefined}
        labelClassName={
          state.options === "three-options" &&
          (!state.darkMode || state.selected === "left-selected")
            ? "!w-[97px]"
            : state.darkMode &&
              (state.options === "three-options" ||
                state.selected === "center-selected") &&
              ["right-selected", "center-selected"].includes(state.selected)
            ? "!w-[98px]"
            : state.options === "four-options" &&
              (!state.darkMode || state.selected === "left-selected")
            ? "!w-[69px]"
            : (state.darkMode &&
                state.options === "four-options" &&
                state.selected === "right-selected") ||
              (state.darkMode && state.selected === "left-center-selected") ||
              (state.darkMode && state.selected === "right-center-selected")
            ? "!w-[70px]"
            : state.options === "two-options"
            ? optionLabelClassName
            : undefined
        }
        onClick={() => {
          dispatch("click_388");
        }}
        selected={state.selected === "left-selected" ? true : undefined}
        text={
          state.selected === "left-selected" &&
          ["four-options", "three-options"].includes(state.options)
            ? "On"
            : state.options === "two-options"
            ? optionText
            : undefined
        }
        text1={
          [
            "center-selected",
            "left-center-selected",
            "right-center-selected",
            "right-selected",
          ].includes(state.selected)
            ? "Off"
            : undefined
        }
      />
      <Option
        className={
          state.options === "two-options" && state.selected === "right-selected"
            ? "!self-stretch !mr-[-0.50px] !mt-[-0.50px] !h-[unset] !mb-[-0.50px] !flex-1 !grow !w-[unset]"
            : ["center-selected", "left-center-selected"].includes(
                state.selected
              )
            ? "!self-stretch !h-[unset] !mt-[-0.50px] !mb-[-0.50px] !flex-1 !grow !w-[unset]"
            : "!self-stretch !h-[unset] !flex-1 !grow !w-[unset]"
        }
        darkMode={state.darkMode ? true : undefined}
        labelClassName={
          state.options === "two-options"
            ? optionLabelClassNameOverride
            : (!state.darkMode &&
                state.options === "three-options" &&
                state.selected === "left-selected") ||
              (!state.darkMode &&
                state.options === "three-options" &&
                state.selected === "right-selected") ||
              state.selected === "center-selected"
            ? "!w-[97px]"
            : state.darkMode &&
              state.options === "three-options" &&
              ["left-selected", "right-selected"].includes(state.selected)
            ? "!w-[98px]"
            : (!state.darkMode &&
                state.options === "four-options" &&
                state.selected === "left-selected") ||
              (!state.darkMode &&
                state.options === "four-options" &&
                state.selected === "right-selected") ||
              (!state.darkMode && state.selected === "right-center-selected") ||
              state.selected === "left-center-selected"
            ? "!w-[69px]"
            : (state.darkMode &&
                state.options === "four-options" &&
                state.selected === "left-selected") ||
              (state.darkMode &&
                state.options === "four-options" &&
                state.selected === "right-selected") ||
              (state.darkMode && state.selected === "right-center-selected")
            ? "!w-[70px]"
            : undefined
        }
        onClick={() => {
          dispatch("click_332");
        }}
        selected={
          state.selected === "center-selected" ||
          state.selected === "left-center-selected" ||
          (state.options === "two-options" &&
            state.selected === "right-selected")
            ? true
            : undefined
        }
        text={
          state.selected === "center-selected" ||
          state.selected === "left-center-selected" ||
          (state.options === "two-options" &&
            state.selected === "right-selected")
            ? "On"
            : undefined
        }
        text1={
          state.options === "two-options"
            ? optionText1
            : (state.options === "four-options" &&
                state.selected === "left-selected") ||
              (state.options === "four-options" &&
                state.selected === "right-selected") ||
              (state.options === "three-options" &&
                state.selected === "left-selected") ||
              (state.options === "three-options" &&
                state.selected === "right-selected") ||
              state.selected === "right-center-selected"
            ? "Off"
            : undefined
        }
      />
      {["four-options", "three-options"].includes(state.options) && (
        <Option
          className={
            state.options === "three-options" &&
            state.selected === "right-selected"
              ? "!self-stretch !mr-[-0.50px] !mt-[-0.50px] !h-[unset] !mb-[-0.50px] !flex-1 !grow !w-[unset]"
              : state.selected === "right-center-selected"
              ? "!self-stretch !h-[unset] !mt-[-0.50px] !mb-[-0.50px] !flex-1 !grow !w-[unset]"
              : "!self-stretch !h-[unset] !flex-1 !grow !w-[unset]"
          }
          darkMode={state.darkMode ? true : undefined}
          labelClassName={
            state.options === "three-options" &&
            (!state.darkMode || state.selected === "right-selected")
              ? "!w-[97px]"
              : state.darkMode &&
                (state.options === "three-options" ||
                  state.selected === "center-selected") &&
                ["left-selected", "center-selected"].includes(state.selected)
              ? "!w-[98px]"
              : (state.darkMode &&
                  state.selected === "right-center-selected") ||
                (!state.darkMode && state.options === "four-options")
              ? "!w-[69px]"
              : "!w-[70px]"
          }
          onClick={() => {
            dispatch("click_335");
          }}
          selected={
            state.selected === "right-center-selected" ||
            (state.options === "three-options" &&
              state.selected === "right-selected")
              ? true
              : undefined
          }
          text={
            state.selected === "right-center-selected" ||
            (state.options === "three-options" &&
              state.selected === "right-selected")
              ? "On"
              : undefined
          }
          text1={
            state.selected === "center-selected" ||
            state.selected === "left-center-selected" ||
            state.selected === "left-selected" ||
            (state.options === "four-options" &&
              state.selected === "right-selected")
              ? "Off"
              : undefined
          }
        />
      )}

      {state.options === "four-options" && (
        <Option
          className={
            state.selected === "right-selected"
              ? "!self-stretch !mr-[-0.50px] !mt-[-0.50px] !h-[unset] !mb-[-0.50px] !flex-1 !grow !w-[unset]"
              : "!self-stretch !h-[unset] !flex-1 !grow !w-[unset]"
          }
          darkMode={state.darkMode ? true : undefined}
          labelClassName={
            !state.darkMode || state.selected === "right-selected"
              ? "!w-[69px]"
              : "!w-[70px]"
          }
          onClick={() => {
            dispatch("click_351");
          }}
          selected={state.selected === "right-selected" ? true : undefined}
          text={state.selected === "right-selected" ? "On" : undefined}
          text1={
            [
              "left-center-selected",
              "left-selected",
              "right-center-selected",
            ].includes(state.selected)
              ? "Off"
              : undefined
          }
        />
      )}
    </div>
  );
};

function reducer(state: any, action: any) {
  if (
    state.darkMode === false &&
    state.options === "two-options" &&
    state.selected === "left-selected"
  ) {
    switch (action) {
      case "click":
        return {
          darkMode: false,
          options: "two-options",
          selected: "right-selected",
        };
    }
  }

  if (
    state.darkMode === false &&
    state.options === "three-options" &&
    state.selected === "right-selected"
  ) {
    switch (action) {
      case "click_299":
        return {
          darkMode: false,
          options: "three-options",
          selected: "left-selected",
        };

      case "click_302":
        return {
          darkMode: false,
          options: "three-options",
          selected: "center-selected",
        };
    }
  }

  if (
    state.darkMode === false &&
    state.options === "three-options" &&
    state.selected === "center-selected"
  ) {
    switch (action) {
      case "click_299":
        return {
          darkMode: false,
          options: "three-options",
          selected: "left-selected",
        };

      case "click_315":
        return {
          darkMode: false,
          options: "three-options",
          selected: "right-selected",
        };
    }
  }

  if (
    state.darkMode === false &&
    state.options === "three-options" &&
    state.selected === "left-selected"
  ) {
    switch (action) {
      case "click_302":
        return {
          darkMode: false,
          options: "three-options",
          selected: "center-selected",
        };

      case "click_315":
        return {
          darkMode: false,
          options: "three-options",
          selected: "right-selected",
        };
    }
  }

  if (
    state.darkMode === false &&
    state.options === "four-options" &&
    state.selected === "right-selected"
  ) {
    switch (action) {
      case "click_329":
        return {
          darkMode: false,
          options: "four-options",
          selected: "left-selected",
        };

      case "click_332":
        return {
          darkMode: false,
          options: "four-options",
          selected: "left-center-selected",
        };

      case "click_335":
        return {
          darkMode: false,
          options: "four-options",
          selected: "right-center-selected",
        };
    }
  }

  if (
    state.darkMode === false &&
    state.options === "four-options" &&
    state.selected === "right-center-selected"
  ) {
    switch (action) {
      case "click_329":
        return {
          darkMode: false,
          options: "four-options",
          selected: "left-selected",
        };

      case "click_332":
        return {
          darkMode: false,
          options: "four-options",
          selected: "left-center-selected",
        };

      case "click_351":
        return {
          darkMode: false,
          options: "four-options",
          selected: "right-selected",
        };
    }
  }

  if (
    state.darkMode === false &&
    state.options === "four-options" &&
    state.selected === "left-center-selected"
  ) {
    switch (action) {
      case "click_329":
        return {
          darkMode: false,
          options: "four-options",
          selected: "left-selected",
        };

      case "click_335":
        return {
          darkMode: false,
          options: "four-options",
          selected: "right-center-selected",
        };

      case "click_351":
        return {
          darkMode: false,
          options: "four-options",
          selected: "right-selected",
        };
    }
  }

  if (
    state.darkMode === false &&
    state.options === "four-options" &&
    state.selected === "left-selected"
  ) {
    switch (action) {
      case "click_332":
        return {
          darkMode: false,
          options: "four-options",
          selected: "left-center-selected",
        };

      case "click_335":
        return {
          darkMode: false,
          options: "four-options",
          selected: "right-center-selected",
        };

      case "click_351":
        return {
          darkMode: false,
          options: "four-options",
          selected: "right-selected",
        };
    }
  }

  if (
    state.darkMode === true &&
    state.options === "two-options" &&
    state.selected === "left-selected"
  ) {
    switch (action) {
      case "click_388":
        return {
          darkMode: true,
          options: "two-options",
          selected: "right-selected",
        };

      case "click":
        return {
          darkMode: true,
          options: "two-options",
          selected: "right-selected",
        };
    }
  }

  if (
    state.darkMode === true &&
    state.options === "three-options" &&
    state.selected === "right-selected"
  ) {
    switch (action) {
      case "click_299":
        return {
          darkMode: true,
          options: "three-options",
          selected: "left-selected",
        };

      case "click_302":
        return {
          darkMode: true,
          options: "three-options",
          selected: "center-selected",
        };
    }
  }

  if (
    state.darkMode === true &&
    state.options === "three-options" &&
    state.selected === "center-selected"
  ) {
    switch (action) {
      case "click_299":
        return {
          darkMode: true,
          options: "three-options",
          selected: "left-selected",
        };

      case "click_315":
        return {
          darkMode: true,
          options: "three-options",
          selected: "right-selected",
        };
    }
  }

  if (
    state.darkMode === true &&
    state.options === "three-options" &&
    state.selected === "left-selected"
  ) {
    switch (action) {
      case "click_302":
        return {
          darkMode: true,
          options: "three-options",
          selected: "center-selected",
        };

      case "click_315":
        return {
          darkMode: true,
          options: "three-options",
          selected: "right-selected",
        };
    }
  }

  if (
    state.darkMode === true &&
    state.options === "four-options" &&
    state.selected === "right-selected"
  ) {
    switch (action) {
      case "click_329":
        return {
          darkMode: true,
          options: "four-options",
          selected: "left-selected",
        };

      case "click_332":
        return {
          darkMode: true,
          options: "four-options",
          selected: "left-center-selected",
        };

      case "click_335":
        return {
          darkMode: true,
          options: "four-options",
          selected: "right-center-selected",
        };
    }
  }

  if (
    state.darkMode === true &&
    state.options === "four-options" &&
    state.selected === "right-center-selected"
  ) {
    switch (action) {
      case "click_329":
        return {
          darkMode: true,
          options: "four-options",
          selected: "left-selected",
        };

      case "click_332":
        return {
          darkMode: true,
          options: "four-options",
          selected: "left-center-selected",
        };

      case "click_351":
        return {
          darkMode: true,
          options: "four-options",
          selected: "right-selected",
        };
    }
  }

  if (
    state.darkMode === true &&
    state.options === "four-options" &&
    state.selected === "left-center-selected"
  ) {
    switch (action) {
      case "click_329":
        return {
          darkMode: true,
          options: "four-options",
          selected: "left-selected",
        };

      case "click_335":
        return {
          darkMode: true,
          options: "four-options",
          selected: "right-center-selected",
        };

      case "click_351":
        return {
          darkMode: true,
          options: "four-options",
          selected: "right-selected",
        };
    }
  }

  if (
    state.darkMode === true &&
    state.options === "four-options" &&
    state.selected === "left-selected"
  ) {
    switch (action) {
      case "click_332":
        return {
          darkMode: true,
          options: "four-options",
          selected: "left-center-selected",
        };

      case "click_335":
        return {
          darkMode: true,
          options: "four-options",
          selected: "right-center-selected",
        };

      case "click_351":
        return {
          darkMode: true,
          options: "four-options",
          selected: "right-selected",
        };
    }
  }

  return state;
}
