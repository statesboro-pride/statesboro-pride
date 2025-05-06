import Typography from "@mui/material/Typography";
import BannerText from "../../components/BannerText";
import Body from "../../components/Body";
import Header from "../../components/Header";
import ContactForm from "./ContactForm";

export function Contact() {
  return (
    <>
      <title>Contact &mdash; Boro Pride</title>

      <Header backgroundImage={["/images/header/header-you-xs.webp", "/images/header/header-you.webp"]}>
        <BannerText>Have a question or comment? Here's how to reach us!</BannerText>
      </Header>

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

export default Contact;
