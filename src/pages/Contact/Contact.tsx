import Typography from "@mui/material/Typography";
import BannerText from "../../components/BannerText";
import Body from "../../components/Body";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export function Contact() {
  return (
    <>
      <title>Contact &mdash; Boro Pride</title>

      <Header backgroundImage={["/images/header/header-contact-xs.webp", "/images/header/header-contact.webp"]}>
        <BannerText>Have a question or comment? Here's how to reach us!</BannerText>
      </Header>

      <Body>
        <Typography variant="h2">Contact us</Typography>
        <p>Statesboro Pride is an all volunteer organization, so the best way to reach us is through e-mail:</p>
        <p>
          <a href="mailto:statesboropride@gmail.com">statesboropride@gmail.com</a>
        </p>

        <p>
          You can also join our Rainbows over the Boro Discord Server here: <a href="">Rainbows Over The Boro</a>
        </p>

        <p>*Please allow 72 hours for response, but be sure to check your spam folder*</p>
      </Body>

      <Footer />
    </>
  );
}

export default Contact;
