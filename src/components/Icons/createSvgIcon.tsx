import type { SvgIconProps, SvgIconComponent } from ".";
import React from "react";
import SvgIcon from "@mui/material/SvgIcon";

export function createSvgIcon(children: React.ReactNode): SvgIconComponent {
  const SvgIconComponent: SvgIconComponent = (props: SvgIconProps) => {
    const { style, children: iconChildren, ...iconProps } = props;
    const svgIconProps: SvgIconProps = {
      style: {
        ...style,
        // width: style?.width ?? "24px",
        // height: style?.height ?? "24px",
      },
      children: children ?? iconChildren,
      ...iconProps,
    };

    return <SvgIcon {...svgIconProps} />;
  };

  SvgIconComponent.muiName = SvgIcon.muiName;
  return SvgIconComponent;
}

export default createSvgIcon;
