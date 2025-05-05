import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export function AudreLordeQuote() {
  return (
    <Stack
      direction="column"
      spacing={{ xs: 2, lg: 5 }}
      style={{
        textAlign: "center",
        padding: "10px",
      }}
    >
      <Typography variant="h3" component="div" className="rainbow-letters">
        "We are powerful because we have survived."
      </Typography>
      <Typography variant="h5" component="div">
        &mdash;Audre Lorde
      </Typography>
    </Stack>
  );
}

export default AudreLordeQuote;
