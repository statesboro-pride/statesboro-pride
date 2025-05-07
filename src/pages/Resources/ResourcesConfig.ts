import type { SxProps, Theme } from "@mui/material";

export const backgroundImage: [string, string] = [
  "/images/header/header-resources-xs.webp",
  "/images/header/header-resources.webp",
];

export const bannerTextSx: SxProps<Theme> = {
  width: { xs: "100%", sm: "75%" },
};

export const typographySx: SxProps<Theme> = {
  fontSize: {
    xs: "4vh",
    md: "6vh",
  },
};
