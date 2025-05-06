import BannerText from "../../components/BannerText";
import Body from "../../components/Body";
import Header from "../../components/Header";
import Paper from "@mui/material/Paper";
import Vendor from "./Vendor";
import Sponsor from "./Sponsor";

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
          <Vendor />
        </Paper>
        <br />
        <Paper elevation={3} style={{ textAlign: "center", padding: "10px" }}>
          <Sponsor />
        </Paper>
      </Body>
    </>
  );
}

export default Partnerships;
