import type * as MUI from "@mui/material";
import type * as React from "react";
import Box from "@mui/material/Box";

export type HeaderBannerProps = {
  backgroundImage: string | [string, string];
  style?: MUI.SxProps<MUI.Theme> | undefined;
} & React.PropsWithChildren;

export function HeaderBanner(props: HeaderBannerProps) {
  const [xsBackgroundImage, mdBackgroundImage] =
    typeof props.backgroundImage === "string" ? [props.backgroundImage, props.backgroundImage] : props.backgroundImage;

  const xsContainerStyle: MUI.CSSProperties = {
    backgroundImage: `url(${xsBackgroundImage})`,
  };
  const mdContainerStyle: MUI.CSSProperties = {
    backgroundImage: `url(${mdBackgroundImage})`,
  };

  return (
    <>
      <Box style={xsContainerStyle} sx={{ display: { xs: "block", md: "none" } }} className="header-banner">
        <Box className="header-banner-wrapper">
          <Box className="header-banner-content">{props.children}</Box>
        </Box>
      </Box>
      <Box style={mdContainerStyle} sx={{ display: { xs: "none", md: "block" } }} className="header-banner">
        <Box className="header-banner-wrapper">
          <Box className="header-banner-content">{props.children}</Box>
        </Box>
      </Box>
    </>
  );
}

export default HeaderBanner;
