import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import * as Icons from "../../Icons";
import DesktopToolbarItem from "./DesktopToolbarItem";

export function DesktopToolbar() {
  return (
    <Stack className="header-toolbar desktop" direction="row" spacing={0}>
      <DesktopToolbarItem title="About" href="/about" label="Learn more about Boro Pride" />
      <DesktopToolbarItem title="Resources" href="/resources" label="Resources to help" />
      <DesktopToolbarItem title="Get Involved" href="/get-involved" label="Get involved with Boro Pride" />
      <DesktopToolbarItem title="Events" href="/events" label="See upcoming happenings and events" />
      <DesktopToolbarItem title="Contact" href="/contact" label="Have a question? Contact us!" />
      <DesktopToolbarItem title="Shop" href="/shop" target="_blank" label="Buy Boro Pride-branded stuff!" />
      <div className="header-toolbar-item spacer" />
      <DesktopToolbarItem icon title="Instagram" href="/instagram" target="_blank" label="Instagram">
        <Icons.Instagram className="header-icon" />
      </DesktopToolbarItem>
      <DesktopToolbarItem icon title="Bluesky" href="/bluesky" target="_blank" label="Bluesky">
        <Icons.Bluesky className="header-icon" />
      </DesktopToolbarItem>
      <DesktopToolbarItem icon title="Facebook" href="/facebook" target="_blank" label="Facebook">
        <Icons.Facebook className="header-icon" />
      </DesktopToolbarItem>
      <div className="header-toolbar-item spacer" />
      <DesktopToolbarItem title="Donate" href="/donate" target="_blank" label="Donate to Boro Pride">
        <Button variant="contained" color="error" size="large" style={{ textTransform: "none" }}>
          <Typography>Donate</Typography>
        </Button>
      </DesktopToolbarItem>
    </Stack>
  );
}

export default DesktopToolbar;
