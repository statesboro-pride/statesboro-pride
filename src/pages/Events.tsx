import Banner from "../components/Banner";
import BannerText from "../components/Banner/BannerText";
import Body from "../components/Body";
import { backgroundImage, bannerTextStyle, iframeStyle, calendarUrl } from "./Events/EventsConfig";

export default function Events() {
  return (
    <>
      <title>Events &mdash; Boro Pride</title>
      <Banner backgroundImage={backgroundImage}>
        <BannerText style={bannerTextStyle}>Upcoming events</BannerText>
      </Banner>
      <Body>
        <iframe src={calendarUrl} style={iframeStyle} width="100%" height="100%"></iframe>
      </Body>
    </>
  );
}
