import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import BannerText from "../../components/Banner/BannerText";

export default function GetSupport() {
  return (
    <Stack direction={{ xs: "column-reverse", md: "row" }} spacing={{ xs: 2, md: 10 }}>
      <Box sx={{ textAlign: { xs: "center", md: "inherit" }, width: "100%" }}>
        <BannerText>Get support.</BannerText>
        <p>
          If you're new to the LGBT community, learning about allyship, or want to support our community through
          education, we've got resources to help.
        </p>
        <Link href="/resources" aria-label="Resources to help">
          <Button size="large" variant="contained" sx={{ minWidth: "40%", backgroundColor: "black" }}>
            Resources to help
          </Button>
        </Link>
      </Box>
      <div style={{ width: "100%" }}>
        <img src="/images/Pride_Hands_Support.webp" style={{ maxWidth: "100%" }} alt="Two women holding hands" />
      </div>
    </Stack>
  );
}
