import Link, { type LinkProps } from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { type ReactNode } from "react";

export type DesktopToolbarItemProps = {
  href: string;
  title: string;
  label?: LinkProps["aria-label"] | undefined;
  target?: LinkProps["target"] | undefined;
  icon?: boolean | undefined;
  children?: ReactNode | undefined;
};

export function DesktopToolbarItem(props: DesktopToolbarItemProps) {
  const className = "header-toolbar-item" + (props.icon ? " icon" : "");
  return (
    <Link href={props.href} target={props.target} className={className} aria-label={props.label}>
      {props.children ?? <Typography>{props.title}</Typography>}
    </Link>
  );
}

export default DesktopToolbarItem;
