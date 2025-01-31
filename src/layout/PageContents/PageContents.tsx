import Box, { type BoxProps } from "@mui/material/Box";
import "./PageContents.css";

export type PageContentsProps = BoxProps;

export default function PageContents(props: PageContentsProps) {
  const { className, ...p } = props;
  return (
    <Box component="main">
      <Box className="ContentsWrapper">
        <Box className={"Contents" + (className ? ` ${className}` : "")} {...p} />
      </Box>
    </Box>
  );
}
