import type * as MUI from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { ResourceLink } from "./ResourceContent";

const typography: MUI.SxProps<MUI.Theme> = {
  fontSize: {
    xs: "3vh",
    md: "4vh",
  },
};

export type ResourceListProps = {
  title: string;
  items: ResourceLink[];
};

export function ResourceList(props: ResourceListProps) {
  return (
    <Box style={{ width: "100%" }}>
      <Typography variant="h2" sx={typography}>
        {props.title}
      </Typography>
      <ul>
        {props.items.map(({ title, href, description }) => (
          <li key={title}>
            <a href={href} target="_blank">
              {title}
            </a>{" "}
            &mdash; {description}
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default ResourceList;
