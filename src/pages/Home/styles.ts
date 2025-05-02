import type * as MUI from "@mui/material";

export type HomeStyle = {
  bannerText: MUI.SxProps<MUI.Theme>;
  typography: MUI.SxProps<MUI.Theme>;
  link: MUI.CSSProperties;
};

export const homeStyle: HomeStyle = {
  bannerText: {
    width: { xs: "100%", lg: "75%" },
  },
  typography: {
    fontSize: {
      xs: "3vh",
    },
  },
  link: {
    color: "white",
    textDecorationColor: "white",
  },
};
