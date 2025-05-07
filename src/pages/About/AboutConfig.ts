import type { CSSProperties, SxProps, Theme } from "@mui/material";

export const backgroundImage: [string, string] = [
  "/images/header/header-about-xs.webp",
  "/images/header/header-about.webp",
];

export const bannerTextStyle: CSSProperties = {
  textAlign: "center",
};

export const typographySx: SxProps<Theme> = {
  fontSize: {
    xs: "3.3vh",
    md: "5vh",
  },
  textAlign: "center",
};
