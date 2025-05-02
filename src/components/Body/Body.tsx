import type * as React from "react";
import Box from "@mui/material/Box";
import { type CSSProperties, type SxProps, type Theme } from "@mui/material";

export type BodyProps = {
  main?: CSSProperties | undefined;
  article?: CSSProperties | undefined;
  div?: SxProps<Theme> | undefined;
} & React.PropsWithChildren;

export function Body(props: BodyProps) {
  return (
    <main style={props.main}>
      <article style={props.article}>
        <Box sx={props.div} className="content-wrapper">{props.children}</Box>
      </article>
    </main>
  );
}

export default Body;
