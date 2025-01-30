import React from "react";
import Box from "@mui/material/Box";
import "./PageHeader.css";
export type PageHeaderProps = {
  imgSrc: string;
  children?: React.ReactNode;
};

export default function PageHeader({ imgSrc, children }: PageHeaderProps) {
  const [navHeight, setNavHeight] = React.useState(getNavHeight);
  React.useEffect(() => {
    setNavHeight(getNavHeight());
  }, []);

  return (
    <Box component="header" className="PageHeader" style={{ paddingTop: `${navHeight}px` }}>
      <Box className="Background">
        <img src={imgSrc}></img>
        <Box className="Overlay"></Box>
      </Box>
      <Box className="ContentsWrapper">
        <Box className="Contents">{children}</Box>
      </Box>
    </Box>
  );
}

function getNavHeight() {
  return document.querySelector("nav")?.getBoundingClientRect().height ?? 0;
}
