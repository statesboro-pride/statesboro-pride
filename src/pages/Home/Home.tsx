import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import BannerText from "../../components/BannerText";
import Body from "../../components/Body";
import Header from "../../components/Header";
import { homeStyle as style } from "./styles";
import ShopBoroPride from "./ShopBoroPride";
import GetInvolved from "./GetInvolved";
import GetSupport from "./GetSupport";
import Partners from "./Partners";
import AudreLordeQuote from "./AudreLordeQuote";
import Newsletter from "./Newsletter";

export function Home() {
  return (
    <>
      <link rel="preload" fetchPriority="high" as="image" href="/images/header/header-home.webp" type="image/webp" />

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
          <GetInvolved />
          <GetSupport />
          <ShopBoroPride />
          <Newsletter />
          <Partners />
          <AudreLordeQuote />
        </Stack>
      </Body>
    </>
  );
}

export default Home;
