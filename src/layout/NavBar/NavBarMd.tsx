import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useLocation, useRedirect } from "../../router";
import SocialMediaButton from "../SocialMediaButton";
import { navItems, socialItems } from "./NavBarItems";

export default function NavBarMd() {
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
