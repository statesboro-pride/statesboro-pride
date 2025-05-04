import Typography from "@mui/material/Typography";
import { type PropsWithChildren } from "react";

export type StackItemLinkProps = {
  href: string;
  label?: string | undefined;
} & PropsWithChildren;

export function MobileToolbarItem(props: StackItemLinkProps) {
  return (
    <div className="header-toolbar-item-container">
      <a href={props.href} className="header-toolbar-item mobile" aria-label={props.label}>
        <Typography variant="h2" component="div">
          {props.children}
        </Typography>
      </a>
    </div>
  );
}

export default MobileToolbarItem;
