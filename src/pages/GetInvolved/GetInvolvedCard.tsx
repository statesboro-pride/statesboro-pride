import CardActionArea from "@mui/material/CardActionArea";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { type ReactNode } from "react";

export type GetInvolvedCardProps = {
  href: string;
  title: string;
  desc: string;
  icon: ReactNode;
};

export function GetInvolvedCard(props: GetInvolvedCardProps) {
  const cardStyle: React.CSSProperties = {
    backgroundColor: "rgba(240, 240, 240, 0.94)",
    textAlign: "center",
    height: "100%",
  };

  return (
    <Card variant="outlined" style={cardStyle}>
      <CardActionArea style={cardStyle} href={props.href}>
        <CardContent>
          <Typography variant="h2" component="div">
            {props.icon}
          </Typography>
          <Typography variant="h4" component="div">
            {props.title}
          </Typography>
          <br />
          <Typography variant="body2" component="div">
            {props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default GetInvolvedCard;
