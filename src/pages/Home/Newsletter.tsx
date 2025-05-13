import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import BannerText from "../../components/Banner/BannerText";

export default function Newsletter() {
  return (
    <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 2, md: 10 }}>
      <Box sx={{ width: "100%", display: { xs: "none", md: "block" } }}>
        <img
          src="/images/Pride_Hands_Forming_Heart.webp"
          alt="A woman forming a heart with her hands"
          style={{ maxWidth: "100%", aspectRatio: 1, objectFit: "cover" }}
        />
      </Box>
      <Box sx={{ textAlign: { xs: "center", md: "inherit" }, width: "100%" }}>
        <BannerText>Newsletter</BannerText>
        <p>Fill our the form for our newsletter so you can receive news and updates from us.</p>
        <Link
          target="_blank"
          href={import.meta.env.VITE_NEWSLETTER_FORM_URL}
          aria-label="Use this form to reach out so that we can welcome you."
        >
          <Button size="large" variant="contained" sx={{ minWidth: "40%", backgroundColor: "black" }}>
            Newsletter Sign-up
          </Button>
        </Link>
      </Box>
    </Stack>
  );
}
