import Typography from "@mui/material/Typography";
import type { CSSProperties } from "react";

const imgStyle: CSSProperties = { maxWidth: "100%", objectFit: "contain" };

export default function Sponsor() {
  return (
    <>
      <Typography variant="h4" component="p">
        Sponsors
      </Typography>
      <p>
        Interested in becoming a sponsor? See the information below and{" "}
        <a href="mailto:statesboropride@gmail.com" target="_blank">
          contact us
        </a>
      </p>
      <div>
        <img src="/images/Sponsorship_Packet_1.webp" style={imgStyle} />
      </div>
    </>
  );
}
