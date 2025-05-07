import { default as MuiAppBar } from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Logo from "./Logo";
import DesktopToolbar from "./AppBar/DesktopToolbar";
import MobileToolbar from "./AppBar/MobileToolbar";

export default function AppBar() {
  return (
    <Box className="header-appbar-container" component="header">
      <MuiAppBar className="header-appbar" component="nav" position="absolute" elevation={0}>
        <Toolbar>
          <Logo />
          <DesktopToolbar />
          <MobileToolbar />
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
}
