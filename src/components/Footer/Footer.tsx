import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";

export function Footer() {
  return (
    <Box className="footer" component="footer">
      <Box className="footer-container" component="section">
        <Box className="footer-content-wrapper">
          <Grid className="footer-content" container direction="row">
            <FooterLeft />
            <FooterRight />
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
