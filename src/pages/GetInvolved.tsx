import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import FrontHandIcon from "@mui/icons-material/FrontHand";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Banner from "../components/Banner";
import BannerText from "../components/Banner/BannerText";
import Body from "../components/Body";
import GetInvolvedCard from "./GetInvolved/GetInvolvedCard";
import { backgroundImage } from "./GetInvolved/GetInvolvedConfig";

export default function GetInvolved() {
  return (
    <>
      <title>Get Involved &mdash; Boro Pride</title>
      <Banner backgroundImage={backgroundImage}>
        <BannerText>Get Involved</BannerText>
      </Banner>
      <Body>
        <Typography variant="h2">Get Involved</Typography>
        <br />
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <GetInvolvedCard
              href="/partnerships"
              title="Become a sponsor/vendor"
              desc="Learn about partnering with Boro Pride"
              icon={<AutoAwesomeIcon fontSize="large" style={{ fill: "rgb(0, 49, 137)" }} />}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <GetInvolvedCard
              href="/volunteer"
              title="Volunteer"
              desc="Get ready to join the fun with Boro Pride!"
              icon={<FrontHandIcon fontSize="large" style={{ fill: "rgb(224, 19, 139)" }} />}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <GetInvolvedCard
              href="/donate"
              title="Donate"
              desc="One of the simplest ways to give is through a direct donation."
              icon={<CreditCardIcon fontSize="large" style={{ fill: "rgb(40, 146, 56)" }} />}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <GetInvolvedCard
              href="/nominate"
              title="Join the Board"
              desc="Applications are accepted and considered year-round."
              icon={<Diversity3Icon fontSize="large" style={{ fill: "rgb(98, 47, 136)" }} />}
            />
          </Grid>
        </Grid>
      </Body>
    </>
  );
}
