import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import BannerText from "../../components/BannerText";
import Body from "../../components/Body";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { homeStyle as style } from "./styles";
import ShopBoroPride from "./ShopBoroPride";
import JoinUs from "./JoinUs";
import GetSupport from "./GetSupport";
import Partners from "./Partners";
import AudreLordeQuote from "./AudreLordeQuote";
import Newsletter from "./Newsletter";

export function Home() {
  return (
    <>
      <title>Boro Pride</title>

      <Header backgroundImage="/images/header/header-home.webp">
        <BannerText sx={style.bannerText}>
          NEW! We now have an online store where you can help support Boro Pride!
        </BannerText>
        <br />
        <Typography sx={style.typography}>
          <Link href="/shop" target="_blank" style={style.link}>
            SHOP NOW &gt;
          </Link>
        </Typography>
      </Header>

      <Body>
        <Stack direction="column" spacing={{ xs: 5, lg: 10 }}>
          <JoinUs />
          <GetSupport />
          <ShopBoroPride />
          <Newsletter />
          <Partners />
          <AudreLordeQuote />
        </Stack>
      </Body>

      <Footer />
    </>
  );
}

export default Home;
