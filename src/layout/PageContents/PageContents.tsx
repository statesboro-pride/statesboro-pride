import React from "react";
import Box from "@mui/material/Box";
import "./PageContents.css";

export type PageContentsProps = {
  children?: React.ReactNode | undefined;
};

export default function PageContents({ children }: PageContentsProps) {
  return (
    <Box component="main">
      <Box className="ContentsWrapper">
        <Box className="Contents">{children}</Box>
      </Box>
    </Box>
  );
}
