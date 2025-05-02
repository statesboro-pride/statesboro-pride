import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import * as Icons from "../Icons";

export function FooterRight() {
  return (
    <Grid size={{ xs: 12, md: 2 }} className="footer-content-right">
      <Stack direction="column" spacing={2}>
        <Link href="/about" aria-label="Learn more about Boro Pride">
          <Typography>About</Typography>
        </Link>
        <Link href="/resources" aria-label="Resources to help">
          <Typography>Resources</Typography>
        </Link>
        <Link href="/contact" aria-label="Have a question? Contact us!">
          <Typography>Contact Us</Typography>
        </Link>
        <Stack direction="row" spacing={2} className="social-media">
          <Link href="/instagram" aria-label="Instagram">
            <Icons.Instagram />
          </Link>
          <Link href="/bluesky" aria-label="Bluesky">
            <Icons.Bluesky />
          </Link>
          <Link href="/facebook" aria-label="Facebook">
            <Icons.Facebook />
          </Link>
        </Stack>
      </Stack>
    </Grid>
  );
}

export default FooterRight;
