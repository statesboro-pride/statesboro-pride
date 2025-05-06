import Stack from "@mui/material/Stack";
import BannerText from "../../components/BannerText";
import Body from "../../components/Body";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

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
        <Paper elevation={3} style={{ padding: "30px 20px" }}>
          <Typography variant="h4" component="p" style={{ textAlign: "center" }}>
            Vendors
          </Typography>
          <p>
            Interested in being a vendor at our Pride Festival?{" "}
            <a href="/vendor" target="_blank">
              Sign up here!
            </a>
          </p>
          <p>
            Set up time and location will be announced closer to the festival date of <strong>Oct 4th, 2025</strong> -
            it is not required to stay until Festival closes, but strongly encouraged.
          </p>
          <p>Pricing for one 10ft x 5ft space:</p>
          <ul>
            <li>501c3 - $20</li>
            <li>Food Vendor - $75</li>
            <li>All Other - $150</li>
          </ul>
          <p>
            Registration fees can be paid through Venmo (
            <a href="/venmo" target="_blank">
              @StatesboroPride
            </a>
            ), CashApp (
            <a href="/cashapp" target="_blank">
              $StatesboroPride
            </a>
            ), PayPal (<a href="/paypal">@StatesboroPride912</a>), cash or check made payable to Statesboro Pride.
          </p>
          Setup details will be provided closer to the festival date. Registration is not complete and space is not
          reserved until payment is complete.
        </Paper>
        <br />
        <Paper elevation={3} style={{ textAlign: "center", padding: "10px" }}>
          <Typography variant="h4" component="p">
            Sponsors
          </Typography>
          <p>
            Interested in becoming a sponsor? See the information below and{" "}
            <a href="mailto:statesboropride@gmail.com" target="_blank">
              contact us
            </a>
          </p>
          <Stack direction={{ xs: "column", lg: "row" }} spacing={1}>
            <div>
              <img src="/images/Sponsorship_Packet_1.webp" style={{ maxWidth: "100%", objectFit: "contain" }} />
            </div>
            <div>
              <img src="/images/Sponsorship_Packet_2.webp" style={{ maxWidth: "100%", objectFit: "contain" }} />
            </div>
          </Stack>
        </Paper>
      </Body>

      <Footer />
    </>
  );
}

export default Partnerships;
