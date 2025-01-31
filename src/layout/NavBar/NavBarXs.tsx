import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useRedirect } from "../../router";
import SocialMediaButton from "../SocialMediaButton";
import { navItems, socialItems } from "./NavBarItems";
import NavBarMenu from "./NavBarMenu";
import useNavBar from "./useNavBar";

export default function NavBarXs() {
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
