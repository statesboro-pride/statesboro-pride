import Body from "../../components/Body";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import BannerText from "../../components/BannerText";

export function Events() {
  const url = new URL("https://calendar.google.com/calendar/embed");
  url.searchParams.append(
    "src",
    "c_6f422753d6cc2b3aabd03f3bb085e49817ab0e5ff303c7e892a4f279b780eb87@group.calendar.google.com"
  );
  url.searchParams.append("ctz", "America/New_York");
  url.searchParams.append("mode", "AGENDA");
  url.searchParams.append("showPrint", "0");
  url.searchParams.append("showCalendars", "0");

  return (
    <>
      <title>Events &mdash; Boro Pride</title>

      <Header backgroundImage={["/images/header/header-events-xs.webp", "/images/header/header-events.webp"]}>
        <BannerText style={{ textAlign: "center" }}>Upcoming events</BannerText>
      </Header>

      <Body>
        <iframe src={url.toString()} style={{ border: 0, minHeight: "600px" }} width="100%" height="100%"></iframe>
      </Body>

      <Footer />
    </>
  );
}

export default Events;
