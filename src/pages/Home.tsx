import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Banner from "../components/Banner";
import BannerText from "../components/Banner/BannerText";
import Body from "../components/Body";
import ShopBoroPride from "./Home/ShopBoroPride";
import GetInvolved from "./Home/GetInvolved";
import GetSupport from "./Home/GetSupport";
import Partners from "./Home/Partners";
import AudreLordeQuote from "./Home/AudreLordeQuote";
import Newsletter from "./Home/Newsletter";
import { backgroundImage, bannerTextSx, typographySx, linkStyle } from "./Home/HomeConfig";

export default function Home() {
  return (
    <>
      <title>Boro Pride</title>
      <Banner backgroundImage={backgroundImage}>
        <BannerText sx={bannerTextSx}>
          NEW! We now have an online store where you can help support Boro Pride!
        </BannerText>
        <br />
        <Typography sx={typographySx}>
          <Link href="/shop" target="_blank" style={linkStyle}>
            SHOP NOW &gt;
          </Link>
        </Typography>
      </Banner>
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
