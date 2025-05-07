import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import BannerText from "../../components/Banner/BannerText";

export default function GetInvolved() {
  return (
    <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 2, md: 10 }}>
      <div style={{ width: "100%" }}>
        <img
          src="/images/Pride_Man_Holding_Heart.webp"
          alt="A man holding holding a paper heart"
          style={{ maxWidth: "100%" }}
        />
      </div>
      <Box sx={{ textAlign: { xs: "center", md: "inherit" }, width: "100%" }}>
        <BannerText>Get Involved.</BannerText>
        <p>
          No matter how you identify, we're holding space for you. Get involved in an inclusive, supportive community
          based in Statesboro-Bulloch County and let us celebrate you.
        </p>
        <Link href="/get-involved" aria-label="Get involved with Boro Pride">
          <Button size="large" variant="contained" sx={{ minWidth: "40%", backgroundColor: "black" }}>
            Get Involved
          </Button>
        </Link>
      </Box>
    </Stack>
  );
}
