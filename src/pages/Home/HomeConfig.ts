import { type CSSProperties, type SxProps, type Theme } from "@mui/material";

export const backgroundImage: [string, string] = [
  "/images/header/header-home-xs.webp",
  "/images/header/header-home.webp",
];

export const bannerTextSx: SxProps<Theme> = {
  width: { xs: "100%", lg: "75%" },
};

export const typographySx: SxProps<Theme> = {
  fontSize: {
    xs: "3vh",
  },
};

export const linkStyle: CSSProperties = {
  color: "white",
  textDecorationColor: "white",
};
