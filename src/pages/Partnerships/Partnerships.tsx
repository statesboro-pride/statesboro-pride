import Stack from "@mui/material/Stack";
import BannerText from "../../components/BannerText";
import Body from "../../components/Body";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export function Partnerships() {
  return (
    <>
      <title>Partnerships &mdash; Boro Pride</title>

      <Header
        backgroundImage={["/images/header/header-partnerships-xs.webp", "/images/header/header-partnerships.webp"]}
      >
        <BannerText style={{ textAlign: "center" }}>Annual Partnerships</BannerText>
      </Header>

      <Body>
        <Stack direction={{ xs: "column", lg: "row" }} spacing={1}>
          <div>
            <img src="/images/Sponsorship_Packet_1.webp" style={{ maxWidth: "100%", objectFit: "contain" }} />
          </div>
          <div>
            <img src="/images/Sponsorship_Packet_2.webp" style={{ maxWidth: "100%", objectFit: "contain" }} />
          </div>
        </Stack>
      </Body>

      <Footer />
    </>
  );
}

export default Partnerships;
