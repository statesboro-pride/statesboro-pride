import type * as MUI from "@mui/material";
import Typography from "@mui/material/Typography";
import BannerText from "../../components/BannerText";
import Body from "../../components/Body";
import Header from "../../components/Header";

const bannerText: MUI.SxProps<MUI.Theme> = {
  textAlign: "center",
};
const typography: MUI.SxProps<MUI.Theme> = {
  fontSize: {
    xs: "3.3vh",
    md: "5vh",
  },
  textAlign: "center",
};

export function About() {
  return (
    <>
      <title>About &mdash; Boro Pride</title>

      <Header backgroundImage={["/images/header/header-about-xs.webp", "/images/header/header-about.webp"]}>
        <BannerText sx={bannerText}>Our Mission</BannerText>
      </Header>

      <Body>
        <Typography variant="h4" sx={typography}>
          Boro Pride is a non-profit organization, established in 2019, that is focused on community building. We strive
          to advocate for the visibility, inclusion, celebration, equality, and safety of LGBTQIAP+ people in
          Statesboro-Bulloch County, Georgia, and the surrounding areas.
        </Typography>
      </Body>
    </>
  );
}

export default About;
