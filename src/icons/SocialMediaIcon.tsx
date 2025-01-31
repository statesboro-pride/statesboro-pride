import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import XIcon from "@mui/icons-material/X";
import { type SvgIconProps } from "@mui/material/SvgIcon";
import BlueskyIcon from "./BlueskyIcon";
import LinktreeIcon from "./LinktreeIcon";

export type SocialMediaIconProps = {
  name: string;
} & SvgIconProps;

export default function SocialMediaIcon({ name, ...props }: SocialMediaIconProps) {
  switch (name) {
    case "Bluesky":
      return <BlueskyIcon {...props} />;
    case "Facebook":
      return <FacebookIcon {...props} />;
    case "Instagram":
      return <InstagramIcon {...props} />;
    case "Linktree":
      return <LinktreeIcon {...props} />;
    case "Pinterest":
      return <PinterestIcon {...props} />;
    case "Twitter":
      return <TwitterIcon {...props} />;
    case "X":
      return <XIcon {...props} />;
    default:
      return null;
  }
}
