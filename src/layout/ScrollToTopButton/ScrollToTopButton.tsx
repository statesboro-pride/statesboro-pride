import React from "react";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import useScrollTrigger from "@mui/material/useScrollTrigger";

export default function ScrollToTopButton({ children }: { children?: React.ReactElement<unknown> }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector("#top-anchor");
    if (anchor) {
      anchor.scrollIntoView(true);
    }
  };

  return (
    <Fade in={trigger}>
      <Box onClick={handleClick} role="presentation" sx={{ position: "fixed", bottom: 16, right: 16 }}>
        {children}
      </Box>
    </Fade>
  );
}
