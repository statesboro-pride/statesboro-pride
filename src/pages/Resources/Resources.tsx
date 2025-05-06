import type * as MUI from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import BannerText from "../../components/BannerText";
import Body from "../../components/Body";
import Header from "../../components/Header";
import * as Content from "./Content";
import ResourceList from "./ResourceList";

const bannerText: MUI.SxProps<MUI.Theme> = {
  width: { xs: "100%", sm: "75%" },
};

const typography: MUI.SxProps<MUI.Theme> = {
  fontSize: {
    xs: "4vh",
    md: "6vh",
  },
};

export function Resources() {
  return (
    <>
      <title>Resources &mdash; Boro Pride</title>

      <Header backgroundImage={["/images/header/header-resources-xs.webp", "/images/header/header-resources.webp"]}>
        <BannerText sx={bannerText}>Not sure what you're looking for? Maybe it's here.</BannerText>
      </Header>

      <Body article={{ maxWidth: "100%" }}>
        <Typography variant="h2" sx={typography}>
          Resources
        </Typography>
        <br />
        <Stack direction={{ xs: "column", md: "row" }} spacing={2} style={{ width: "100%" }}>
          <ResourceList title="Advocacy" items={Content.Advocacy} />
          <ResourceList title="Health &amp; Wellbeing" items={Content.HealthAndWellbeing} />
          <ResourceList title="Education" items={Content.Education} />
        </Stack>
        <br />
        <Stack direction={{ xs: "column", md: "row" }} spacing={2} style={{ width: "100%" }}>
          <ResourceList title="Parenting" items={Content.Parenting} />
          <ResourceList title="Social" items={Content.Social} />
          <ResourceList title="Allyship" items={Content.Allyship} />
        </Stack>
      </Body>
    </>
  );
}

export default Resources;
