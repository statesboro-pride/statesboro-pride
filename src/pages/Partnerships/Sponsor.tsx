import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { CSSProperties } from "react";
import type { ResponsiveStyleValue } from "@mui/system";

const stackDirection: ResponsiveStyleValue<"column" | "row" | "row-reverse" | "column-reverse"> = {
  xs: "column",
  lg: "row",
};
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
      <Stack direction={stackDirection} spacing={1}>
        <div>
          <img src="/images/Sponsorship_Packet_1.webp" style={imgStyle} />
        </div>
        <div>
          <img src="/images/Sponsorship_Packet_2.webp" style={imgStyle} />
        </div>
      </Stack>
    </>
  );
}
