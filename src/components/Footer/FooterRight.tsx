import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import * as Icons from "../Icons";

export function FooterRight() {
  return (
    <Grid size={{ xs: 12, md: 2 }} className="footer-content-right">
      <Stack direction="column" spacing={2} sx={{ textAlign: { xs: "center", md: "inherit" } }}>
        <Link href="/about" aria-label="Learn more about Boro Pride">
          <Typography variant="h5" component="p">
            About
          </Typography>
        </Link>
        <Link href="/resources" aria-label="Resources to help">
          <Typography variant="h5" component="p">
            Resources
          </Typography>
        </Link>
        <Link href="/contact" aria-label="Have a question? Contact us!">
          <Typography variant="h5" component="p">
            Contact Us
          </Typography>
        </Link>
        <Stack direction="row" spacing={2} className="social-media" justifyContent={{ xs: "center", md: "inherit" }}>
          <Link href="/instagram" aria-label="Instagram">
            <Icons.Instagram sx={{ width: "36px", height: "36px" }} />
          </Link>
          <Link href="/bluesky" aria-label="Bluesky">
            <Icons.Bluesky style={{ width: "36px", height: "36px" }} />
          </Link>
          <Link href="/facebook" aria-label="Facebook">
            <Icons.Facebook style={{ width: "36px", height: "36px" }} />
          </Link>
        </Stack>
      </Stack>
    </Grid>
  );
}

export default FooterRight;
