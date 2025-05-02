import type * as MUI from "@mui/material";
import type * as React from "react";
import Typography from "@mui/material/Typography";

const typography: MUI.SxProps<MUI.Theme> = {
  fontSize: {
    xs: "6vh",
    sm: "7vh",
    md: "8vh",
  },
};

export type BannerTextProps = {
  sx?: MUI.SxProps<MUI.Theme> | undefined;
  style?: MUI.CSSProperties | undefined;
} & React.PropsWithChildren;

export function BannerText(props: BannerTextProps) {
  const sx = { ...typography, ...props.sx };
  return (
    <Typography variant="h1" sx={sx} style={props.style}>
      {props.children}
    </Typography>
  );
}

export default BannerText;
