import Stack from "@mui/material/Stack";
import * as Icons from "../../Icons";
import DesktopToolbarItem from "./DesktopToolbarItem";

export function DesktopToolbar() {
  return (
    <Stack className="header-toolbar desktop" direction="row" spacing={0}>
      <DesktopToolbarItem title="About" href="/about" label="Learn more about Boro Pride" />
      <DesktopToolbarItem title="You" href="/you" label="Use this form to reach out so that we can welcome you." />
      <DesktopToolbarItem title="Resources" href="/resources" label="Resources to help" />
      <DesktopToolbarItem title="Events" href="/events" label="See upcoming happenings and events" />
      <DesktopToolbarItem title="Partnerships" href="/partnerships" label="Learn how you can partner with Boro Pride" />
      <DesktopToolbarItem title="Contact" href="/contact" label="Have a question? Contact us!" />
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
    </Stack>
  );
}

export default DesktopToolbar;
