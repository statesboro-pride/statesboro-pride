import Box from "@mui/material/Box";
import MusicNoteRoundedIcon from "@mui/icons-material/MusicNoteRounded";
import Grid2 from "@mui/material/Grid2";
import Config, { type NavComponent } from "../../config";
import TransHeartIcon from "../../icons/TransHeartIcon";
import PrideHeartIcon from "../../icons/PrideHeartIcon";
import { NavLink, useRedirect } from "../../router";
import "./PageFooter.css";
import SocialMediaButton from "../SocialMediaButton";

const navItems = [Config.navs.get("You"), Config.navs.get("About"), Config.navs.get("Resources")].filter(
  (nav) => nav !== undefined
) as NavComponent[];
const socialItems = [...Config.navs].filter(([, nav]) => nav.showInNav && nav.type === "social");

export default function PageFooter() {
  const redirect = useRedirect();
  let hasRenderedFirst = false;

  return (
    <Box component="footer" className="PageFooter">
      <Box className="Contents">
        <Grid2 container direction="row" className="ContentsGrid">
          <Grid2 size={{ xs: 12, md: 10 }}>
            <h3>
              You belong here. <PrideHeartIcon style={{ width: "32px", height: "32px" }} />
            </h3>
            <p>
              Site design by Folly.
              <br />
              <small>
                Mods by Melody.&nbsp;
                <MusicNoteRoundedIcon style={{ color: "#F7A8B8", width: "16px", height: "16px" }} />
                <TransHeartIcon style={{ width: "16px", height: "16px" }} />
              </small>
            </p>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 2 }}>
            {navItems.map((nav) => (
              <p>
                <NavLink to={nav.path} style={{ color: "white" }}>
                  {nav.label}
                </NavLink>
              </p>
            ))}
            <div>
              {socialItems.map(([, nav]) => {
                const first = !hasRenderedFirst;
                hasRenderedFirst = true;
                return (
                  <SocialMediaButton
                    key={nav.path}
                    label={nav.label}
                    onClick={() => redirect(nav.path)}
                    color="white"
                    first={first}
                  />
                );
              })}
            </div>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
}
