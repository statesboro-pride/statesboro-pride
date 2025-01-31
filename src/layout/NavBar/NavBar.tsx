import React from "react";
import AppBar from "@mui/material/AppBar";
import Slide from "@mui/material/Slide";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import NavBarMd from "./NavBarMd";
import NavBarXs from "./NavBarXs";
import "./NavBar.css";

export default function NavBar() {
  const trigger = useScrollTrigger();

  return (
    <React.Fragment>
      <div id="top-anchor"></div>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar component="nav" position="fixed" className="NavBar" elevation={0}>
          <Toolbar role="menubar" className="Toolbar">
            <NavBarMd />
            <NavBarXs />
          </Toolbar>
        </AppBar>
      </Slide>
    </React.Fragment>
  );
}
