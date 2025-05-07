import HeaderBanner from "../components/Banner";
import BannerText from "../components/Banner/BannerText";
import Body from "../components/Body";
import Paper from "@mui/material/Paper";
import Vendor from "./Partnerships/Vendor";
import Sponsor from "./Partnerships/Sponsor";
import {
  backgroundImage,
  bannerTextStyle,
  vendorPaperStyle,
  sponsorPaperStyle,
} from "./Partnerships/PartnershipsConfig";

export default function Partnerships() {
  return (
    <>
      <title>Partnerships &mdash; Boro Pride</title>
      <HeaderBanner backgroundImage={backgroundImage}>
        <BannerText style={bannerTextStyle}>Annual Partnerships</BannerText>
      </HeaderBanner>
      <Body>
        <Paper elevation={3} style={vendorPaperStyle}>
          <Vendor />
        </Paper>
        <br />
        <Paper elevation={3} style={sponsorPaperStyle}>
          <Sponsor />
        </Paper>
      </Body>
    </>
  );
}
