import type * as MUI from "@mui/material";
import BannerText from "../../components/BannerText";
import Body from "../../components/Body";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const bannerText: MUI.SxProps<MUI.Theme> = {
  textAlign: "center",
};

export function NotFound() {
  return (
    <>
      <title>Boro Pride</title>

      <Header backgroundImage="/images/header/header-home.webp">
        <BannerText sx={bannerText}>We see you, but we don't see this page.</BannerText>
      </Header>

      <Body>
        <p>We couldn't find the page you were looking for. This is either because:</p>
        <p>
          <ul>
            <li>There is an error in the URL entered into your web browser. Please check the URL and try again.</li>
            <li>The page you are looking for has been moved or deleted.</li>
          </ul>
        </p>
        <p>
          You can return to our homepage by <a href="/">clicking here</a>.
        </p>
      </Body>

      <Footer />
    </>
  );
}

export default NotFound;
