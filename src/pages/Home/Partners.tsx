import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Partners() {
  return (
    <Stack direction="column" spacing={5} style={{ textAlign: "center" }}>
      <Typography variant="h2">Community Partners</Typography>
      <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 2, md: 5 }}>
        <Link
          href="https://georgiaequality.org"
          target="_blank"
          style={{ width: "100%" }}
          aria-label="Georgia Equality"
        >
          <img src="/images/partners/Georgia-Equality.webp" style={{ maxWidth: "100%" }} alt="Georgia Equality" />
        </Link>
        <Link
          href="https://www.facebook.com/OneBoroStatesboro"
          target="_blank"
          style={{ width: "100%" }}
          aria-label="One Boro"
        >
          <img src="/images/partners/One-Boro.webp" style={{ maxWidth: "100%" }} alt="One Boro" />
        </Link>
        <Link
          href="https://linktr.ee/GSULGBTQalumni"
          target="_blank"
          style={{ width: "100%" }}
          aria-label="Georgia Southern Alumni LGBTQ+ Network"
        >
          <img
            src="/images/partners/GSU-Alumni-LGBTQ.webp"
            style={{ maxWidth: "100%" }}
            alt="Georgia Southern Alumni LGBTQ+ Network"
          />
        </Link>
        <Link
          href="https://www.crownmagnoliacourtofgeorgia.org/"
          target="_blank"
          style={{ width: "100%" }}
          aria-label="Crown Magnolia Court of Georgia"
        >
          <img src="/images/partners/CMCGA.webp" style={{ maxWidth: "100%" }} alt="Crown Magnolia Court of Georgia" />
        </Link>
      </Stack>
    </Stack>
  );
}
