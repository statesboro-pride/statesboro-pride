import { type CSSProperties } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MusicNoteRounded from "@mui/icons-material/MusicNoteRounded";
import { PrideHeart, TransHeart } from "../Icons";

const prideHeart: CSSProperties = {
  width: "32px",
  height: "32px",
};
const musicNoteRounded: CSSProperties = {
  color: "#F7A8B8",
  width: "16px",
  height: "16px",
};
const transHeart: CSSProperties = {
  width: "16px",
  height: "16px",
};

export function FooterLeft() {
  return (
    <Grid size={{ xs: 12, md: 10 }} className="footer-content-left">
      <Typography variant="h2">
        You belong here. <PrideHeart style={prideHeart} />
      </Typography>
      <Typography>
        Site design by Folly.
        <br />
        <small>
          Mods by Melody.&nbsp;
          <MusicNoteRounded style={musicNoteRounded} />
          <TransHeart style={transHeart} />
        </small>
      </Typography>
    </Grid>
  );
}

export default FooterLeft;
