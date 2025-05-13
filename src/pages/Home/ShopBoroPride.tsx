import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import WaterBottle from "./WaterBottle";

export default function ShopBoroPride() {
  return (
    <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 2, md: 5 }}>
      <div style={{ width: "100%" }}>
        <img src="/images/Dog_Bandana.webp" style={{ maxWidth: "100%", aspectRatio: 1, objectFit: "cover" }} alt="Cute dog wearing pride bandana" />
      </div>
      <div style={{ width: "100%", textAlign: "center" }}>
        <Typography variant="h2">SHOP BORO PRIDE!</Typography>
        <p>
          Show your <span style={{ color: "rgb(253, 35, 2)" }}>P</span>
          <span style={{ color: "rgb(252, 134, 4)" }}>R</span>
          <span style={{ color: "rgb(3, 54, 251)" }}>I</span>
          <span>D</span>
          <span style={{ color: "rgb(248, 157, 208)" }}>E</span> by picking up some fresh <br />
          Boro Pride merch in our new online store! <br />
          Proceeds from every purchase go to Boro Pride programs throughout the year.
        </p>
        <Link href="/shop" target="_blank">
          <Button size="large" variant="contained" sx={{ minWidth: "50%", backgroundColor: "black" }}>
            Shop
          </Button>
        </Link>
      </div>
      <WaterBottle />
    </Stack>
  );
}
