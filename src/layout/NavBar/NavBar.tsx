import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Config from "../../config";
import { useLocation, useRedirect } from "../../router";
import NavBarMenu from "./NavBarMenu";
import SocialMediaButton from "../SocialMediaButton";
import useNavBar from "./useNavBar";
import "./NavBar.css";

const navItems = [...Config.navs].filter(([, nav]) => nav.showInNav && nav.type !== "social");
const socialItems = [...Config.navs].filter(([, nav]) => nav.showInNav && nav.type === "social");

export default function NavBar() {
  React.useEffect(() => {
    const navHeight = document.querySelector("nav")?.getBoundingClientRect().height ?? 0;
    const header = document.querySelector("header");
    if (header) {
      header.style.paddingTop = `${navHeight}px`;
    }
  });

  return (
    <AppBar component="nav" position="fixed" className="NavBar" elevation={0}>
      <Toolbar role="menubar" className="Toolbar">
        <NavBarMd />
        <NavBarXs />
      </Toolbar>
    </AppBar>
  );
}

function NavBarMd() {
  const location = useLocation();
  const redirect = useRedirect();
  let hasRenderedFirst = false;

  return (
    <Box className="Contents Contents-md" sx={{ display: { xs: "none", md: "flex" } }}>
      <img role="button" title="Home" src="/images/logo-128.png" className="Logo" onClick={() => redirect("/home")} />

      <Stack direction="row" spacing={0} className="Items">
        {navItems.map(([, nav]) => {
          const className = "Button" + (nav.path === location.pathname ? " Button-selected" : "");
          return (
            <Button key={nav.path} title={nav.label} className={className} onClick={() => redirect(nav.path)}>
              <Typography>{nav.label}</Typography>
            </Button>
          );
        })}

        {socialItems.map(([, nav]) => {
          const first = !hasRenderedFirst;
          hasRenderedFirst = true;
          return (
            <SocialMediaButton
              key={nav.path}
              label={nav.label}
              onClick={() => redirect(nav.path)}
              color="white"
              first={first}
            />
          );
        })}
      </Stack>
    </Box>
  );
}

function NavBarXs() {
  const redirect = useRedirect();
  const { anchorElNav, onOpen, onClose, handleOnClick } = useNavBar(redirect);
  let hasRenderedFirst = false;

  return (
    <Box className="Contents Contents-xs" sx={{ display: { xs: "flex", md: "none" } }}>
      <img src="/images/logo-64.png" className="Logo" onClick={() => handleOnClick("Home")} />

      <Stack direction="row" spacing={1} className="Items">
        <NavBarMenu id="NavBarMenu" anchorElNav={anchorElNav} onOpen={onOpen} onClose={onClose}>
          {navItems.map(([, nav]) => (
            <MenuItem key={nav.path} title={nav.label} className="MenuItem" onClick={() => handleOnClick(nav.path)}>
              <Typography>{nav.label}</Typography>
            </MenuItem>
          ))}

          <MenuItem className="SocialMediaButtons">
            {socialItems.map(([, nav]) => {
              const first = !hasRenderedFirst;
              hasRenderedFirst = true;
              return (
                <SocialMediaButton
                  key={nav.path}
                  label={nav.label}
                  onClick={() => handleOnClick(nav.path)}
                  color="black"
                  first={first}
                />
              );
            })}
          </MenuItem>
        </NavBarMenu>
      </Stack>
    </Box>
  );
}
