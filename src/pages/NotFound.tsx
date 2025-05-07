import Banner from "../components/Banner";
import BannerText from "../components/Banner/BannerText";
import Body from "../components/Body";
import { backgroundImage, bannerTextStyle } from "./NotFound/NotFoundConfig";

export default function NotFound() {
  return (
    <>
      <title>Boro Pride</title>
      <Banner backgroundImage={backgroundImage}>
        <BannerText sx={bannerTextStyle}>We see you, but we don't see this page.</BannerText>
      </Banner>
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
    </>
  );
}
