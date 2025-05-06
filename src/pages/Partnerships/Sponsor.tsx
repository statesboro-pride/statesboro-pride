import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export function Sponsor() {
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
      <Stack direction={{ xs: "column", lg: "row" }} spacing={1}>
        <div>
          <img src="/images/Sponsorship_Packet_1.webp" style={{ maxWidth: "100%", objectFit: "contain" }} />
        </div>
        <div>
          <img src="/images/Sponsorship_Packet_2.webp" style={{ maxWidth: "100%", objectFit: "contain" }} />
        </div>
      </Stack>
    </>
  );
}

export default Sponsor;
