import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import MobileDialog from "./MobileDialog";

export function MobileToolbar() {
  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Stack className="header-toolbar mobile" direction="row" spacing={0}>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" onClick={onOpen}>
          <MenuIcon />
        </IconButton>
      </Stack>

      <MobileDialog open={open} onClose={onClose} />
    </>
  );
}

export default MobileToolbar;
