import Box from "@mui/material/Box";
import "./PageFooter.css";
import { Grid2 } from "@mui/material";

export default function PageFooter() {
  return (
    <Box component="footer" className="PageFooter">
      <Box className="Contents">
        <Grid2 container direction="row" sx={{width: "75%", alignItems: "flex-start", justifyContent: "center"}}>
          <Grid2 size={10}>
            <h3>You belong here. ♡</h3>
            <p>Site design by Folly.</p>
          </Grid2>
          <Grid2 size={2}>
            <p>You</p>
            <p>About</p>
            <p>Resources</p>
            <div>Social Media</div>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
}
