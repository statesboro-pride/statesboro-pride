import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import BannerText from "../../components/BannerText";

export function JoinUs() {
  return (
    <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 2, md: 10 }}>
      <div style={{ width: "100%" }}>
        <img
          src="/images/Pride_Man_Holding_Heart.webp"
          alt="A man holding holding a paper heart"
          style={{ maxWidth: "100%" }}
        />
      </div>
      <Box sx={{ textAlign: { xs: "center", md: "inherit"}, width: "100%" }}>
        <BannerText>Join us.</BannerText>
        <p>
          No matter how you identify, we're holding space for you. Join an inclusive, supportive community based in
          Statesboro-Bulloch County and let us celebrate you.
        </p>
        <Link href="/you" aria-label="Use this form to reach out so that we can welcome you.">
          <Button size="large" variant="contained" sx={{ minWidth: "40%", backgroundColor: "black" }}>
            Join Boro Pride
          </Button>
        </Link>
      </Box>
    </Stack>
  );
}

export default JoinUs;
