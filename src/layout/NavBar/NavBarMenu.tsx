import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";

type AppNavMenuProps = {
  id: string;
  anchorElNav: HTMLElement | false | null;
  onOpen: (event: React.MouseEvent<HTMLElement>) => void;
  onClose: (event: object, reason: "backdropClick" | "escapeKeyDown") => void;
  children: React.ReactNode;
};

export default function NavBarMenu(props: AppNavMenuProps) {
  const { id, anchorElNav, onOpen, onClose, children } = props;
  const anchorEl = anchorElNav !== false ? anchorElNav : null;
  return (
    <React.Fragment>
      <IconButton
        size="large"
        color="inherit"
        aria-label="Pages"
        aria-controls={id}
        aria-haspopup="true"
        onClick={onOpen}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id={id}
        anchorEl={anchorEl}
        open={Boolean(anchorElNav)}
        onClick={onOpen}
        onClose={onClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        {children}
      </Menu>
    </React.Fragment>
  );
}
