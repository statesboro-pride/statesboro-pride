import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Banner from "../components/Banner";
import BannerText from "../components/Banner/BannerText";
import Body from "../components/Body";
import * as Content from "./Resources/ResourceContent";
import ResourceList from "./Resources/ResourceList";
import { backgroundImage, bannerTextSx, typographySx } from "./Resources/ResourcesConfig";

export default function Resources() {
  return (
    <>
      <title>Resources &mdash; Boro Pride</title>
      <Banner backgroundImage={backgroundImage}>
        <BannerText sx={bannerTextSx}>Not sure what you're looking for? Maybe it's here.</BannerText>
      </Banner>
      <Body article={{ maxWidth: "100%" }}>
        <Typography variant="h2" sx={typographySx}>
          Resources
        </Typography>
        <br />
        <Stack direction={{ xs: "column", md: "row" }} spacing={2} style={{ width: "100%" }}>
          <ResourceList title="Advocacy" items={Content.Advocacy} />
          <ResourceList title="Marriage Protections" items={Content.MarriageProtections} />
          <ResourceList title="Education" items={Content.Education} />
        </Stack>
        <br />
        <Stack direction={{ xs: "column", md: "row" }} spacing={2} style={{ width: "100%" }}>
          <ResourceList title="Parenting" items={Content.Parenting} />
          <ResourceList title="Social" items={Content.Social} />
          <ResourceList title="Allyship" items={Content.Allyship} />
        </Stack>
        <br />
        <Stack direction={{ xs: "column", md: "row" }} spacing={2} style={{ width: "100%" }}>
          <ResourceList title="Health &amp; Wellbeing" items={Content.HealthAndWellbeing} />
        </Stack>
      </Body>
    </>
  );
}
