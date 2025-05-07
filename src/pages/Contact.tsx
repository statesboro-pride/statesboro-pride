import Typography from "@mui/material/Typography";
import Banner from "../components/Banner";
import BannerText from "../components/Banner/BannerText";
import Body from "../components/Body";
import ContactForm from "./Contact/ContactForm";
import { backgroundImage } from "./Contact/ContactConfig";

export default function Contact() {
  return (
    <>
      <title>Contact &mdash; Boro Pride</title>
      <Banner backgroundImage={backgroundImage}>
        <BannerText>Have a question or comment? Here's how to reach us!</BannerText>
      </Banner>
      <Body>
        <Typography variant="h2">Contact us</Typography>
        <p>
          Whether you identify as a member of the LGBTQIA+ community, you're our ally, or if you're still figuring it
          out&mdash;you have a home with us. We want your support and we want to support you, too. Use the form below to
          reach out so that we can welcome you.
        </p>
        <p>
          <em>*Please allow 72 hours for response, but be sure to check your spam folder*</em>
        </p>
        <ContactForm />
      </Body>
    </>
  );
}
