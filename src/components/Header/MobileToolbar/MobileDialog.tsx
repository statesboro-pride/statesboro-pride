import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import * as Icons from "../../Icons";
import MobileToolbarItem from "./MobileToolbarItem";
import HeaderLogo from "../HeaderLogo";

export type MobileDialogProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileDialog(props: MobileDialogProps) {
  return (
    <Dialog className="header-appbar-container" fullScreen open={props.open} onClose={props.onClose}>
      <AppBar elevation={0} className="header-appbar">
        <Toolbar>
          <HeaderLogo />
          <Stack direction="row" spacing={0} className="header-toolbar mobile">
            <IconButton size="large" edge="start" aria-label="close" onClick={props.onClose}>
              <CloseIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Stack direction="column" spacing={4} className="header-dialog">
        <MobileToolbarItem href="/about" label="Learn more about Boro Pride">
          About
        </MobileToolbarItem>
        <MobileToolbarItem href="/resources" label="Resources to help">
          Resources
        </MobileToolbarItem>
        <MobileToolbarItem href="/get-involved" label="Get involved with Boro Pride">
          Get Involved
        </MobileToolbarItem>
        <MobileToolbarItem href="/events" label="See upcoming happenings and events">
          Events
        </MobileToolbarItem>
        <MobileToolbarItem href="/contact" label="Have a question? Contact us!">
          Contact
        </MobileToolbarItem>
        <MobileToolbarItem href="/shop" label="Buy Boro Pride-branded stuff!">
          Shop
        </MobileToolbarItem>
        <MobileToolbarItem href="/donate" label="Donate to Boro Pride">
          <Button variant="contained" color="error"  style={{ textTransform: "none" }}>
            <Typography variant="h2" component="div">
              Donate
            </Typography>
          </Button>
        </MobileToolbarItem>
        <Stack direction="row" spacing={5} className="social-media">
          <MobileToolbarItem href="/instagram" label="Instagram">
            <Icons.Instagram />
          </MobileToolbarItem>
          <MobileToolbarItem href="/bluesky" label="Bluesky">
            <Icons.Bluesky />
          </MobileToolbarItem>
          <MobileToolbarItem href="/facebook" label="Facebook">
            <Icons.Facebook />
          </MobileToolbarItem>
        </Stack>
      </Stack>
    </Dialog>
  );
}

export default MobileDialog;
