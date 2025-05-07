import Typography from "@mui/material/Typography";
import Banner from "../components/Banner";
import BannerText from "../components/Banner/BannerText";
import Body from "../components/Body";
import { backgroundImage, bannerTextStyle, typographySx } from "./About/AboutConfig";

export default function About() {
  return (
    <>
      <title>About &mdash; Boro Pride</title>
      <Banner backgroundImage={backgroundImage}>
        <BannerText style={bannerTextStyle}>Our Mission</BannerText>
      </Banner>
      <Body>
        <Typography variant="h4" sx={typographySx}>
          Boro Pride is a non-profit organization, established in 2019, that is focused on community building. We strive
          to advocate for the visibility, inclusion, celebration, equality, and safety of LGBTQIAP+ people in
          Statesboro-Bulloch County, Georgia, and the surrounding areas.
        </Typography>
      </Body>
    </>
  );
}
