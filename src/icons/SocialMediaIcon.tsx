import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import XIcon from "@mui/icons-material/X";
import BlueskyIcon from "./BlueskyIcon";
import LinktreeIcon from "./LinktreeIcon";

export type SocialMediaIconProps = {
  name: string;
};

export default function SocialMediaIcon({ name }: SocialMediaIconProps) {
  switch (name) {
    case "Bluesky":
      return <BlueskyIcon />;
    case "Facebook":
      return <FacebookIcon />;
    case "Instagram":
      return <InstagramIcon />;
    case "Linktree":
      return <LinktreeIcon />;
    case "Pinterest":
      return <PinterestIcon />;
    case "Twitter":
      return <TwitterIcon />;
    case "X":
      return <XIcon />;
    default:
      return null;
  }
}
