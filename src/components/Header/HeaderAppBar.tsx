import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import HeaderLogo from "./HeaderLogo";
import DesktopToolbar from "./DesktopToolbar/DesktopToolbar";
import MobileToolbar from "./MobileToolbar/MobileToolbar";

export function HeaderAppBar() {
  return (
    <Box className="header-appbar-container" component="header">
      <AppBar className="header-appbar" component="nav" position="absolute" elevation={0}>
        <Toolbar>
          <HeaderLogo />
          <DesktopToolbar />
          <MobileToolbar />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default HeaderAppBar;
