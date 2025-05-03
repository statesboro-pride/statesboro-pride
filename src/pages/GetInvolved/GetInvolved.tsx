import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import FrontHandIcon from "@mui/icons-material/FrontHand";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import CardActionArea from "@mui/material/CardActionArea";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import BannerText from "../../components/BannerText";
import Body from "../../components/Body";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export function GetInvolved() {
  const cardStyle: React.CSSProperties = {
    backgroundColor: "rgba(240, 240, 240, 0.94)",
    textAlign: "center",
    height: "100%",
  };

  return (
    <>
      <title>Get Involved &mdash; Boro Pride</title>

      <Header backgroundImage={["/images/header/header-contact-xs.webp", "/images/header/header-contact.webp"]}>
        <BannerText>Get Involved</BannerText>
      </Header>

      <Body>
        <Typography variant="h2">Get Involved</Typography>
        <br />
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card variant="outlined" style={cardStyle}>
              <CardActionArea style={cardStyle} href="/partnerships">
                <CardContent>
                  <Typography variant="h2" component="div">
                    <AutoAwesomeIcon fontSize="large" style={{ fill: "rgb(0, 49, 137)" }} />
                  </Typography>
                  <Typography variant="h4" component="div">
                    Become a sponsor
                  </Typography>
                  <br />
                  <Typography variant="body2" component="div">
                    Learn about partnering with Boro Pride
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card variant="outlined" style={cardStyle}>
              <CardActionArea style={cardStyle} href="/volunteer">
                <CardContent>
                  <Typography variant="h2" component="div">
                    <FrontHandIcon fontSize="large" style={{ fill: "rgb(224, 19, 139)" }} />
                  </Typography>
                  <Typography variant="h4" component="div">
                    Volunteer
                  </Typography>
                  <br />
                  <Typography variant="body2" component="div">
                    Get ready to join the fun with Boro Pride!
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card variant="outlined" style={cardStyle}>
              <CardActionArea style={cardStyle} href="/donate">
                <CardContent>
                  <Typography variant="h2" component="div">
                    <CreditCardIcon fontSize="large" style={{ fill: "rgb(40, 146, 56)" }} />
                  </Typography>
                  <Typography variant="h4" component="div">
                    Donate
                  </Typography>
                  <br />
                  <Typography variant="body2" component="div">
                    One of the simplest ways to give is through a direct donation.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card variant="outlined" style={cardStyle}>
              <CardActionArea style={cardStyle} href="/nominate">
                <CardContent>
                  <Typography variant="h2" component="div">
                    <Diversity3Icon fontSize="large" style={{ fill: "rgb(98, 47, 136)" }} />
                  </Typography>
                  <Typography variant="h4" component="div">
                    Join the Board
                  </Typography>
                  <br />
                  <Typography variant="body2" component="div">
                    Applications are accepted and considered year-round.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Body>

      <Footer />
    </>
  );
}

export default GetInvolved;
